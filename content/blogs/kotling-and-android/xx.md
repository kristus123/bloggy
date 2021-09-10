Let, Also, Apply, Run, With - Kotlin Scope Functions

private var number: int? = null; // this will compile
private var number: int = null;  // this will NOT compile


let's say we have the following instance variable

private var number: int? = null;

if you do

```java
if (number != null) {
log(number + 1)  // this will not compile
}
```

```
if (number != null) {
log(number!! + 1)  // add an assert (!!) to check that `number` is not null
}
```

kotlin handles nulls in a fancy way

```java
private var number: Int? = null
...

number?.let {
val anotherNumber = it + 1
}
```

We now get a new variable named `it` which contains the value of `number` at the time the line of code is called.

You can technically set number back to null within this, and still get the value from `ìt` as it will store the value it was while the line `number?.let` was called
```java
number?.let {
number = null
val anotherNumber = it + 1
}
```


```java
val x = number?.let {
    1 + 1
}
```

x will return `Int?` with the optional value `2` if number is not null.
This is because the last line will be returned even though `return` is not explicitly called (very similar to many functional programming languages)



If you want to return a default value, then you can use a ternary operator like this

```java
val x = number?.let {
    1 + 1
} ?: 10
```

x will now return `Int` which will either be `2` if number is not null or 10 if number is null.


```kotlin
fun squareI() = (i*i).also { i++ }
```

this will square i, and at the same time add i + 1

you also have access to `it` which is the result of `i*i`


```
PersonObject.apply {
// here you can access the object by using `this` or calling methods directly. you can mute the object etc etc or call logic
// it will return itself
}
```


```
PersonObject.run {
// here you can access the object by using `this` or calling methods directly. you can mute the object etc etc or call logic
// here it will return the last line of code
}

you can also use with(PersonObject) {} which is exactly the same
```
