---
title: Where should the configuration be?
description: A post mortem discussion
tags: ['exceptions', "implementation", 'architecture']
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd158-01-nap_1_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=ab30ef04868dab40093925bc69ca6427
readButton: read more
pathPrefix: blogs
readable: true
---

## Preface

It is important to have both sides of the story present when discussing with yourself or else it is not a dicussion, and you will learn nothing.

I could not find any well-structured articles on config files except [this one](https://medium.com/transferwise-engineering/where-to-put-application-configuration-4a2a46bd1bdd)
*(I tried finding articles which did not shared my views as well)*.

I recommend reading that article before continuing on this.

**NB!** This is not a discussion whether refactoring for the sake of cleaner code gives any value. That is a completely different topic which can be discussed [here](/content/blogs/todo-not-ready)

<content-seperator space="xl">

## Let's get going!

</content-seperator>

## What is "configuration" ?
onfiguration can be put into different categories:
- non-behavior-changing configuration (url, username, password, number of available thread, framwork-configuration)
- behavior-changing configuration (max retriess, allowed input, boolean values)

# "It is much easier to see all the configuration of the application if it is at the same place"
That is true, but When will someone benefit from seeing both the `database username` and `list of endpoints with bypassed security` at the same time ?

Both the argument and my response is flawed.

The benefit of config files is not to have everything at one place. The benefit of a config file is to abstract certain values from the code.

The argument I have against regular use of config files is that it creates a more complex codebase which is harder to read, maintain and reason with.

Some things makes sense to have in config files from the start. 
Some things should start off as being hard-coded.

<content-seperator space="xl">

## Only when truly needed should config files be used

</content-seperator>


# "It makes it much easier to change behavior without having to look at the code"
That might sound true, but i would never change a value in the config file without seeing which places the code references that value. That is much easier to do with an IDE if all the values are located in the code and not an external file.

You are never certain what the scope of a change is without looking at the code as it's the only source of truth.

## Changing behavior with config files
What happens when the config is separated from the usage is that it makes it less clear what the code actually does. Let's look at an example:

```yaml
additional-fee:
    only-in-holiday-seasons: true
    amount: 1.50
```
Let's assume these values are only used one place, and only changed 4 times a year.
*(which is a very generous number when it comes to how often values are actually updated from my experience)*

```python
def calculate_fee(package, customer):
    fee = shipping_fee(package, customer)
    if config["additional-fee.only-in-holiday-seasons"] and today_is_holiday():
        return fee + config["additional-fee.amount"]
    else:
        return fee


fee = calculate_fee(package, customer)
bill(customer, fee)
```

It is obvious what the intention of the code is, but i have no idea what it actually does without also having to check the config file. Another way of solving it is to simply have the code be a `1:1` representation of what is actually happening.


```python
def calculate_fee(package, customer):
    fee = shipping_fee(package, customer)
    if today_is_holiday():
        return fee + 1.50
    else:
        return fee


fee = calculate_fee(package, customer)
bill(customer, fee)
```

The second example is without a doubt easier to read, and also easier to write tests for. Code that is never executed should not be in the project. If a boolean value toggles between what flow to execute there will alwys be one block of code that is never touched while running in production.


## The boilerplate of getting config values into the code

Having 20 lines of code at the top of a class responsible for mapping the values from the config is a lot of noise for our poor brains.
Noise makes code harder to read and when developers gets used to the noise they start ignoring it.

Code which developers ignore is where bugs will be safe from extinction.

If a class or file uses 20 values from the config, it is a clear candidate for refactoring.


## The amount of mental energy needed
As the first example showed, in order to know what flow the program takes you have to open up the config file and find the declared fields.
When there are tons of config noise and you need to look for `external.inventory-system.special-holiday-discount.percentage` in order to find 
out what your program actually does is a lot unecessary work.

I am not a fan of code that requires a lot of mental power in order to be understood.


### More mentally exhausting than you might think

Now that you have found the values in the config, you need to go back to the code and always have those values in mind when mentally executing the flow. This is an unnecessary cognitive load which makes the code less readable. Each time you see code referencing the config you will need to have in mind what the value is. Having `true` or `false` in the code would be much more readable.

```python
get("/inventory", parameters={ 
    "exclude_out_of_order_items": config["remote-system.inventory.exclude-out-of-order-items"]
})
```

```python
get("/inventory", parameters={ 
    "exclude_out_of_order_items": True
})
```

<content-seperator space="xl">

## Know thy' mind
*Studies and discoveries*

</content-seperator>

The human brain is wired into wanting to explore and find out.

### Your brain is by nature curious
If you sit in a room while someone speaks on the phone, your brain will start to fill the gaps and puzzle together the conversation which you can not hear.
Thus, if you can't see what a value is, your brain naturally desires to know what this o' holy hidden config value might be. is it `True`, is it `False`, is it `5`. Who knows? What a pain it is to be alive...

You will eventually surpress these desires but your brain will need to spend unnecessary energy each time it has to read the code, which will make it exhausted until it starts ignoring the noise *(which means it will be a nice place for a bug to hide from extinction)*.


### Your brain has limited fuel
This is an experiment where people either walked through the streets of new york, or through the park. They both walked the same distance and towards the same destination.

While walking through the streets of New York, you need to make sure you don't walk into someone and avoid breaking any written or unwritten rules. At the same time your brain needs to process and filter between what is important information and what's not important *(noise, commercial signs, blinking lights and all the big impressive buildings)*.

People who walked through the park had much less menatal strain compared to the other group, thus performing much better on cognitive tasks which was done when they arrived to the destination.


<content-seperator space="xl">

## Code which is prematurely complex benefits nobody
*Keep it simple for your own and others sake*

</content-seperator>


<content-quote quote="In general programmers are pretty smart people. Smart people sometimes like to show off their smarts by demonstrating their mental juggling abilities. One difference between a smart programmer and a professional programmer is that the professional understands that clarity is king. Professionals use their powers for good and write code that others can understand." person="Robert C. Martin" source="Clean code" icon="mdi-book-open-page-variant">
</content-quote>


If you can get by with writing code without needing to hide the value, then you should do so. If it is needed for various reasons to move something out of the code, then use config files. Start with the simplest solution and have **YAGNI** in mind.

From experience, configuration files are not maintained at the same level as the production code which means unused fields are present. There might be many reasons why that is so:

- config files are rarely maintained at the same level as code.
- The config file is not code and you will never need to look at the config file in its entirety. Compare this to production code where having the possiblity to read through the entirety is something which is done quite often and we constantly look for ways to increase readability by producing well-written code.


# "What if I want to use the values at multiple places?"
First of all, think of **YAGNI**. You might never use the value at multiple places. Secondly, only when it is **actually** needed at different places should you **first consider** making a class/method for reducing duplication by referencing a config value multiple places. I would consider multiple solutions before even thinking about copy-pasting `config["inventory-system.access-token"]` somewhere it is needed.

From experience, whenever I have seen a value has been used multiple places there has been no attempt at making a solution which follows common principles for achieving reusability, readability and **DRY**.

## An example
```py


h = Headers()
h.add("Authorization", config["inventory-system.access-token"])
h.add("language", config["inventory-system.user-id"])
h.add("username", config["inventory-system.username"])

get("/inventory", h)
```

These lines of code for creating headers might be repeated multiple places whenever the code calls the inventory-system. This could be moved into a class/method, encapsulating how the header is actually generated.

```py
get("/inventory", inventory_system_headers())
```

I have many times seen duplication like this so this is not just a simple example, but a realistic one as well.

## Conclusion

Some things makes perfect sense to have in the config but be pragmatic about what you actually add.
By prematurely adding values you will most likely lose more than you gain.