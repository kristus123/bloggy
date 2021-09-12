What i like about the `sealed` keyword is pretty cool. Combined with the new `record` type it will be pretty fun to model domains in a type-safe way.

## Quick recap

Final classes can be extended by none.
- Records are implicitly marked final.

`non-sealed` classes can still be extended by others.

A `sealed` must be extended by another class or interface, or else it will not compile

Classes extending a `sealed` class must either be markded `final`, `sealed` or `non-sealed`

In the beginning i did not really see why a `non-sealed` class was necessary.
But a `non-sealed` class is useful in scenarios like this

```java
// Example from stackoverflow

public abstract sealed class Shape
    permits Circle, Rectangle, Square {...}

public final class Circle extends Shape {...}

public sealed class Rectangle extends Shape 
    permits TransparentRectangle, FilledRectangle {...}
public final class TransparentRectangle extends Rectangle {...}
public final class FilledRectangle extends Rectangle {...}

public non-sealed class Square extends Shape {...}

```
```
// quote also taken from stackoverflow

"You want to permit only the specified classes to extend Shape.
Now what's the point in making Square non-sealed?
Because you want to allow any other class to extend Square (and the hierarchy)."
```
[stackoverflow question](https://stackoverflow.com/questions/63860110/what-is-the-point-of-extending-a-sealed-class-with-a-non-sealed-class)

A good design will often not need a complicated hierarchy luckily.

The true benefit in this is to do domain modelling.
[Scott](https://www.google.com/search?q=domain+modelling+scott&oq=domain+modelling+scott&aqs=chrome..69i57j33i160l2.4654j0j7&sourceid=chrome&ie=UTF-8) is a person who can definetely give you some insight in how powerful these new features can be. 

```java
// x

sealed interface Activity permits Eat {...}

final class Eat extends Activity {...}
final class Sleep extends Activity {...}
final class Fart extends Activity {...}

public String doActivity(Action action) {
    switch (action) {
        case Eat eat: {
            return eat.dinner()
        }
        case Sleep sleep: {
            return sleep.now()
        }
    }
}
```

This will not compile, as we have not said what to do if the user passes a `Fart`.

[Read more about cool and new switch features here](/content/java/cool-and-new-switch-features)

Sealed classes and records fit very nice together when it comes to modelling the domain

```java

sealed interface Boat {...}

final class EarlyMorningBoat implements Boat {...}
final class AfternoonBoat implements Boat {...}
final class LateNightBoat implements Boat {...}

public Routes getRoutes(Boat boat) {...}
```
*Disclaimer*: I am not the most well-versed when it comes to the public transportation domain 