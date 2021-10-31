---
title: My first coding interview challenge
description: How exciting!
tags: ['python', "interview", 'github', 'git']
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd181-252-gloy.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=29678906046aa4f830406b8f2893267f
readButton: Read more
pathPrefix: python
readable: true
---

# See: [Github](https://github.com/kristus123/coding-challenge-alien-radar-discovery-thingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)

The task was fun, but the main challenge was more about the beaty of design, architecture and decision-making.

**4'ish** hours were estimated to be used on it. I solved the task quickly in order to have a working system as a reference, and later spent time thinking about the code and refactoring.

## My approach

Changes and decision are done in a very short feedback-cycle. Everytime you better your understanding of the domain you will see a way to more clearly reflect the domain and what it's trying to solve in the code.

I did not do test-first-development, but shortly I after verified that it worked by testing.
The quickest *(ironically)* and most pragmatic solution was to do it this way.

I did write tests, but they came after the design and implementation were done.
This meant my design was not purely guided by TDD, but i still ended up with a solution which was easy to test.
However, I did not fully start on refactoring until I had a basic test-suite.

I would not do it like this all the time. if this was a larger project it would be better to take your time in order to build quality into the solution from the very start.

<content-quote quote="The tools used will guide the solution" person="Dave Thomas and Andy Hunt" source="the pragmatic programmer" icon="mdi-book-open-page-variant">
</content-quote>
It is true without a doubt that the tools that are used guide the solution and design of a project. Everything from the build pipeline, linters, tools and culture all affect the final solution.

## How my tools shaped the solution

Decisions and work-ethics were guided by the fact that i worked on my Windows pc, which meant I didn't have my custom tools.

Over the years you become lazy and still want to work efficiently. Tools and custom setup will help you achieve a higher level of efficiency without sacrificing precious calories.

Certain things I did not bother to do *(or i postponed for a very long time)*, as it would require effort to achieve with a simple text-editor.

<content-quote quote="If you have to do something manually twice, automate it the third time" person="Twitter CTO" icon="mdi-twitter" source="I heard the quote from a conference talk. Source not found" >
</content-quote>


## Domain modelling


[Scott Wlaschin](https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKksLKlMLyoyYPTiK07OLylRKM9JLE7OyMwDAKcdCvQ&q=scott+wlaschin&oq=scott+w&aqs=chrome.1.69i57j46i39j46i512l4j69i60l2.1456j0j4&sourceid=chrome&ie=UTF-8) talks about how he likes to model the domain and do [event storming](https://www.google.com/search?q=event+storming&oq=event+sot&aqs=chrome.1.69i57j0i10l9.1862j0j4&sourceid=chrome&ie=UTF-8).
He starts by **not** thinking about the domain in terms of SQL-tables and classes.


<content-quote quote="Limiting the perspective to software terminology will hurt the overall understanding of the domain and will lead to a sub-optimal solution" person="Scott Wlaschin" icon="mdi-book-open-page-variant" source="Domain modelling made functional" >
</content-quote>

### Some times that is the only way to start, and some times it is not

My design was definitely affected by the fact that the map was just a text file and made some of the interfaces cohere to this truth.
It was later fixed during refactoring, but maybe a lot of refactoring could have been avoided if i did not go this path?

This was a good example of the ups and downs of thinking in terms of data types and raw logic when writing code which is also trying to represents the domain in a readable fashion.

It definitely helped me create a solution quickly, but some parts suffered temporarily.

<content-quote quote="What is the most important part of the system [for the manager, thus the developers]? The part that makes money!" person="Scott Wlaschin" icon="mdi-book-open-page-variant" source="Domain modelling made functional" >
</content-quote>