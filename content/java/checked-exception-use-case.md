---
title: Checked exceptions are cool yo!
description: Use them when it makes sense
tags: ['exceptions', "implementation", 'architecture']
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd20-016-jj.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f5c3d7ff2068c623837fd51dfc065cf4
readButton: read more
pathPrefix: java
readable: true
---


A method returns either a value, or it fails.
When you want to handle a specific error, you should consider using checked exceptions.

I have for a long time been almost brainwashed into thinking checked exceptions should never be used.
That might be an overstatement, but there has been a lot of negativity around checked exceptions around me.

The main argument against checked exceptions is that it breaks encapsulation and exposes the underlying errors that might occcur.
That is a valid argument as you don't want to expose to the consumer exactly which source you are fetching data from and what sql exception might occurr.

Another reason for avoiding checked exceptions is that it clutters up your code, and you will have to deal with unrelated exceptions that you have no interest in at all.

But what about the times where you want to return something, **BUT** there could be side-effects directly related to the domain you are working with and you want to document that this might occur?

```java
Token getToken() throws InvalidToken
```

```java

// implementation
try {
    var token = tokenService.getToken(user)
    var data = dataService.fetchData(token)
} catch (InvalidToken e) {
    tokenService.deleteToken(user)
    dataService.deleteData(user)
    throw e
}
```

if the token is invalid, you might want to clean up and throw an exception.

This could also be achieved by returning a different response that wraps the token in an `Optional<>` or a similar solution.
The most important in my opinion is that you **force** the consumer to handle a possible error.

In the project i am currently working on, we have been following our own pattern of error handling.
This way of dealing with errors has slowly infected other implemented solutions (just like the boiling frog).

Yes, checked exceptions expose more information about the method, but unchecked exceptions **hides** them.
That might not necessarily be any better.

In my current project we are doing exactly what i showed above, but we are using unchecked exceptions to achieve the same result.


The downside of this is that there is no type-safety, and you are breaking a semantic encapsulation as you are forced to know about the inner workings of a method in order to know which error it throws. that is much worse than using a checked exception which explicitly documents what error we want to know about and might be thrown.

There are many good use-cases for checked exceptions, and i feel foolish for ignoring them for so long.