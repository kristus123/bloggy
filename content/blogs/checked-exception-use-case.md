A method returns either a value, or it fails.
When you want to handle a specific error, you should consider using checked exceptions.

I have for a long time been almost brainwashed into thinking checked exceptions should never be used.
That might be an overstatement, but it is not far from the truth.

The main argument against checked exceptions is that it breaks encapsulation and exposes the underlying errors that might occcur.
That is a valid argument, as you often don't want to expose to the consumer exactly which source you are fetching data from.

Another alternative for checked exceptions are that it clutters up your code, and you will have to deal with unrelated exceptions that you have no interest in at all.

But what about the times where you want to return something, BUT there could be side-effects directly related to the domain you are working with.


Token getToken() throws InvalidToken

Token token try token = tokenService.getToken(user)
catch (InvalidToken e)
    tokenService.deleteToken(user)
    dataService.deleteData(user)
    throw e

if the token is invalid, you want to clean up and then throw an exception.

This could be achieved by returning a different response that wraps the token.
The most important in my opinion is that you force the consumer to handle a possible error.

In the project i am currently working on, we have been following our own pattern of error handling.
This way of dealing with errors has slowly infected other implemented solutions (just like the boiling frog).

Yes, checked exceptions expose more information about the method but unchecked exceptions hide them. That might not necessarily be better.
In my current project we are doing exactly what i showed above, but we are using unchecked exceptions to achieve the same.
The downside of this is that there is no type-safety regarding this, and you are breaking a semantic encapsulation, forcing you to read the innter workings of a method in order to know which error it throws. that is much worse than using a checked exception which explicitly documents what error we want to know about and might be thrown.

There are many good use-cases for checked exceptions, and i feel foolish for ignoring them for so long.