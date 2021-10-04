---
title: Enforcing rules to the codebase 
description: my shower thought
tags: ['']
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd250-pdgekko00070-image_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=092730556b48039f255c4447d596a920
readButton: Read more
pathPrefix: blogs
readable: true
---

Today i played around with making executable rules regarding design and architecture in a codebase.

That made me look back to when I played around with code analyzis tools to detect errors and I didn't feel it detected much.

## Why is it not enough to just have faith that everyone does their part?

It probably would be enough 80% of the time, but No matter how strong-willed you are there will be times where you are not able to stay true to your principles.


So we could say that code analyzis tools could help out in times of weakness, and having executable tests to make sure you follow the team's design pattern would be both good documentation and less time spent on pull requests to verify that everything is up to standard.


But before that even begins, there should be a discussion with the team on which approach to take, what to focus on, what standards to enforce and how to make sure they are applied as planned.


Just as you plan on how to implement a new change, you should plan the guidelines for achieving a conceptual integrity as well. These guidelines will be the source of truth for everyone to follow which makes it important that they are:

- easily applied
- easy to understand
- easily available for reference
- everyone agrees on them

This, just like many other tasks is an iterative process where you always improve the specifications.


What i have experienced is that often people take the familiar path when starting from scratch.

# The familiar path is not the easiest path, it is simply just what you are used to

When you encounter new standards, you will be struggling against a force that is stronger than you and eventually will wear your out. Accept that things are done differently when working in new environments.

## Struggling against your own codebase

Your foot won't fit in a small shoe so there is no need to try.
So why struggle so hard to force your new solution into the current design?

If there are new requirement that no longer fits with your design, you should work on the new design or your team's guidelines, not on the requirement.

## Simple code leads to simple arcitecture

A simple architecture is what you should aim for, as there is no reason to overcomplicate things.
Simple code will make it easy to extend and modify your codebase.

## If we want everything to be simple, how strict should we be ?

As always, it depends on the complexity and lifetime of the project.
Long-lived and complex projects should spend more time on planning, architecture and design as it will pay off in the long run

As talked about eariler, you could create a simple specification document that guides everyone's decisions throughout the project. This could be used as a source of truth when debating in the team on how to do things, and if there is disagreement in a decision, you must talk about the specification document and not the decision or feature.

If you feel code analyzis tools will be beneficial, then you should highly consider using them. Your team will need to commit to it in order to reap the rewards it give. Discuss with your team whether this is an investment you feel will pay off.