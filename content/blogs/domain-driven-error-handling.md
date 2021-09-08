---
title: Getting started
description: 'error handling'
tags: ['fruit', 'microservices']
coverImage: anime.png
---

domain-driven error-handling


There are many ways of handling errors in a codebase, but it is also something which is definitely looked at as a second-class citizen.

The focus is usually not on the error handling, as errors are just things that 'are thrown when it occurrs'.

An obvious war regarding how error handling should be handled is to look at Java's checked and unchecked exceptions. People argue that checked exceptions are breaking the encapsulation of the method, forcing the consumer to know what errors might be thrown.

That is a valid argument, and i have for a long time supported this statement (and i still support the idea of hiding as much informationi as possible for the consumer)

Another reason i also have been supporting this statement is because it makes code easier, as you only have to write your 'happy path'.

Throwing exceptions is at many times the easiest and most fitting solution, which makes it the desired solution without a doubt.

But there are places where you need to know that an error might occur, and that you also want to handle it at the same place the code is executed. The more reliable the code needs to be, the more explicit the error handling should be.

I have been having scary nightmares lately where i call a method, and it crashes, which makes everything crash even though that is not what i wanted.

These are the places where you want to be explicit about what errors might be thrown. I have seen many places that deals with this by looking into the method (which means you have dishonored the encapsulation) and then try-catches the exception thrown.

This works, but if you want to model the domain, you want to make things as type-safe as possible and take advantage of the wonderful compiler.

Here is a place where something checked exceptions might come in handy.

```java
UnpaidOrder<MenuItem> placeOrder(MenuItem menuItem) throws IngredientsMissing;
```

You don't need to have nightmares when errors are documented as the consumer is forced to handle them. This might in some cases not be wanted, but there are definetely places where something like this should be considered.

There will always be a 500 internal server error here and there, but that is something that should have another strategy for handling as it has nothing to do with the domain.

There are many ways to model the domain, what which should be the most important is to maintain a strong conceptual integrity with your team.

And writing code like this leads to self-documenting code that models the domain.
It would also be possible to do a check before the `placeOrder(ingredients)` is called.


```java
if (ingredientStorage.contains(ingredients)) {
placeOrder(menuItem);
} else {
// what to do here ?
}
```

As you can see we still have to handle that the ingredients might be missing.
And also there is no compile-time safety that forces us to handle a case where there is no more ingredients left.

Even though `placeOrder(menuItem)` no longer has responsibility to handle the ingredient storage, it is still possible to forget to check if ingredients are available before placing the order.
A way to deal with this possible semantic error is to make it impossible to pass a `MenuItem` that misses some ingredients


```java
EstimatedOrderDelivery placeOrder(ProcessableOrder order);
```

Now we have to make sure that the order is able to be processed

```java
ProcessableOrder processableOrder = assertOrderIsProcessable(order); // verifies that ingredients are available etc.
placeOrder(processableOrder);
```

`placeOrder()` is no longer responsible for dealing with unprocessable orders, and we achieved that by using the compiler and having the method accept another input parameter.

If we now focus on the method `assertOrderIsProcessable` which indicates by its name that it will crash if the order is not processable, we can see that we have only moved the responsibility of handling the case where ingredients are missing elsewhere.

At some point we need to deal with it, and as we talked about, having hidden side-effects does not document our domain. Let us update the method `assertOrderIsProcessable`

```java
ProcessableOrder assertOrderIsProcessable(UnverifiedOrder order) throws IngredientsMissing;
```

Note that the input now takes an `UnverifiedOrder`, which means it is impossible for us to accidentally pass in an already validated order. It now also throws a checked exception, meaning we have to handle that somehow. Let us move up and see how the code is used

```java
UnverifiedOrder order = mapOrderFromRequestBody(requestBody);
try {
return orderService.placeOrder(order);
} catch (IngredientsMissing e) {
throw FailedToPlaceOrder.displayRecommendedAlternatives(order);
}
```

the consumer of the method has no idea who throws `IngredientsMissing`, it only cares about handling it.

We moved the error handling out of the method, making us able to only focus on the happy path and avoiding making complex return objects.

However if `IngredientsMissing` was an unchecked exception (also called runtime exceptions) then we would have to use try-catch blocks without relying on the compiler to guide us on which errors to handle. That is without a doubt the benefit of checked exceptions. We have also used it to model our domain, making it very descriptive to what can happen when you try to place an order. We made our method arguments only accept orders that were either processed or unverified, making it impossible to pass the wrong objects, and also documenting our domain even better.