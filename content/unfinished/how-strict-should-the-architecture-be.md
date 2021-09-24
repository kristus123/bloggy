how strict should the architecture be?

Today i have played around with making executable rules regarding design and architecture.

That made me think the same thought when I played around with code analyzis tools to detect errors.
First of all, I didn't feel it detected much (i did not test it on common bugs, but i gave it other tasks like bad code), and even if i did purposefully add some crazy things into the code,
it did not trigger anything at all.

## Why is it not enough to just have faith that everyone does their part?

It probably would be enough. But No matter how strong you are, there will be times where you are not able to stay true
to your principles.

So we could say that code analyzis tools could help out in times of weakness, and having executable tests to make sure you follow the team's design pattern would be both good documentation and less time spent on pull requests to verify that everything is up to standard.

But before that even begins, there should be a discussion with the team on which approach to take, what to focus on, what standards to enforce and how to make sure they are applied as planned.

Just as you plan on how to implement a new change, you should plan on these topics as well. These are your guidelines and will be the source of truth for everyone to follow, which makes it important that they are easily applied, easy to understand, easily available for reference, and everyone agrees on them. This, just like many other tasks, is an iterative process where you always improve the specifications.

What i have experienced is that often people take the familiar path when starting from scratch.
The familiar path is not the easiest path, it is simply just what you are used to.
If you are working in a functional programming language while having you familiar procedural mindset, you will be struggling against the flow.

Struggling against a force that is stronger than you will eventually wear your out.

## Struggling against your own codebase

Your foot won't fit into a smaller shoe, so there is no need to even attempt it.
So why struggle so hard to force your new solution into the current design?

If there are new requirement that no longer fits with your design, you should work on the new design, not on the requirement.

The tests that gives the most value are the ones that avoids mistakes when someone changes new code and introducing bugs.

Tests can detect much more than just errors in your method. they can be used to verify everything works together, and it can enforce design patterns the compiler can't see.

There are tests that add noe value, which are the ones you should consider not making.

## Simple code leads to simple arcitecture

A simple architecture is what you should aim for, as there is no reason to overcomplicate things.
Simple code will make it easy to extend and modify your codebase.

So if we want everythign to be simple, how strict should we be ?
As always, it depends on the lifetime of the project.
The longer life expectancy, the more time should be spent on planning, architecture and design.
And as talked about eariler. Create a **simple** specification document that guides everyone's decision making throughout the project.