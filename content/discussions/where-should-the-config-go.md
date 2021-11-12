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

# START

## What is "configuration" ?
onfiguration can be put into different categories:
- non-behavior-changing configuration (url, username, password)
- behavior-changing configuration (max retriess, allowed input, boolean values)

Some things makes sense to have in config files from the start. Some things should start off as being hard-coded. Only when needed should the code change to conform to new requirements. 


# "It is much easier to see all the configuration of the application if it is at the same place"
That is a valid point. But When will I benefit from seeing both the `database username` and `inventory system base url` at the same time ?
If I look at the config file, I only look for one thing. 

# "It makes it much easier to change behavior without having to look at the code"
That might sound true, but i would never change a value in the config file without seeing which places in the code references that value.
One day it is referenced one place. Tomorrow ten places.

You are never certain what the scope of the change is without looking at the code, which is the only source of truth.

## Changing behavior with config files
What happens when the config is separated from the usage is that it makes it less clear what the code actually does. Let's look at an example

```yaml
additional-fee:
    only-in-holiday-seasons: true
    amount: 1.50
```

```python


amount = calculate_shipping(package, customer)
if config["additional-fee.only-in-holiday-seasons"]:
    bill(customer, amount + config["additional-fee.amount"])
else:
    bill(customer, amount)
```

Let's assume these values are only used one place, and only changed 4 times a year.
*(which is a very generous number when it comes to how often values are actually updated from my experience)*


```python


amount = calculate_shipping(package, customer) + fee_if_holiday()
bill(customer, amount)
```
**There are some semantic difference between the examples. Ignore them as they are not important*


It is more clear what actualy happens in the second examples as the code is less verbose and more literate.
If i wanted to find out how `fee_if_holiday` is implemented i don't need to go far to find out.

## The boilerplate of getting config values into the code

Having 20 lines of code at the top of a class responsible for mapping the values from the config is a lot of noise for our poor brains.
Noise makes the code harder to read and what happens is the developers gets used to the noise, thu starts to ignore it.

Code which developers ignore is where bugs will be safe from extinction.



## The amount of work needed to mentally map
The first example: In order to know what flow the program takes you have to open up the config file and find the declared fields.
When you have tons of configuration and you need to look for `external.inventory-system.special-holiday-discount.percentage` in order to find 
out what your program actually does you will cry yourself to sleep.

"Does the discount work as intended?" a manager might say as he is worried about something. You can either say yes, the tests are passing and we are sure it works, or you can say no, we are not 100% sure as we have decided to use different values for test and production.

## More mentally exhausting than you might think

Now you need to go back to the code and always have these values in mind when mentally running through the program. This is an unnecessary cognitive load which give negative value in redability.

Also, the human brain is wired into wanting to find out. Many scientific experiments are done in this field
- If you sit in a room while someone speaks on the phone, your brain will start grinding in order to fill the gaps of the person on the other line which you can not hear.
Thus, if you can't see what a value is, your brain naturally desires to know what this "o' holy hiden config value" might be. is it `True`, is it `False`, is it `5`. Who knows. What a pain it is to be alive...

You will probably surpress the desires, but your brain will spend unnecessary energy each time it has to read the code, which will make it exhausted *(until it starts ignoring it, which means it will be a nice place for a bug to hide from extinction)*.

Using config like this is over-engineering.



<content-quote quote="In general programmers are pretty smart people. Smart people sometimes like to show off their smarts by demonstrating their mental juggling abilities. One difference between a smart programmer and a professional programmer is that the professional understands that clarity is king. Professionals use their powers for good and write code that others can understand." person="Robert C. Martin" source="Clean code" icon="mdi-book-open-page-variant">
</content-quote>


If you can get by with writing code without needing to use config, then you should do so. If it is needed for various reasons to move something out of the code, then use config files. Start with the simplest solution and have **YAGNI** in mind.

From experience, configuration files are rarely maintained at the same level as the production code. There are many reasons why that is so:
- For every **150 time** you check a file you go to the config file **one time** to find what you are interested in and don't bother about unused fields.
- The config file is not code and you will never need to look at the config file in its entirety, compared to production code where having the possiblity to read through the entirety is something which is done quite often and we constantly look for ways to reflect the domain and increase readability by producing well-written and structured code.


# "What if I want to use the values at multiple places?"
First of all, think of **YAGNI**. You might never use the value at multiple places. Secondly, only when it is **actually** used in different places should it be considered to be put into the config file. (and you can still probably avoid putting it into a config file if you are smart about how you implement your solution).

From experience, whenever I have seen a value has been used multiple places there has been no attempt at making a solution which follows common principles for avoiding duplication and making the code more readable.


```py


h = Headers()
h.add("Authorization", config["inventory-system.access-token"])
h.add("language", config["inventory-system.user-id"])
h.add("username", config["inventory-system.username"])

get("/inventory", h)
```

This line of code might be repeated multiple places whenever the code calls the inventory-system. This could be moved into a class/method, encapsulating how the header is actually generated. (It could be abstracted even further, but this example is not about implementation design)

```py
get("/inventory", headers())
```

Now there is no need to care about how the header is created and duplication has been erased. This is the only example where it makes sense to use config values and as mentioned earlier, these are `non-behavior-changing values`.

## Conclusion

Some things makes perfect sense to have in the config but be pragmatic about what you actually add.
By prematurely adding values you will most likely lose more than you gain.