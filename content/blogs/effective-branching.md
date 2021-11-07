---
title: Some words on effective branching
description: My perspective on being efficient
tags: ['git', 'effective', 'efficient']
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd239-pdfamouspainting088007-1-image_4.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6207b612bcc5f33407f39201b2954e45
readButton: Git power!
pathPrefix: blogs
readable: true
---

Git is one of those tools where you only need to know 20% in order to reap 80% of its benefits.

Every key i press consumes valuable calories, thus i made my own aliases and workflows in order to make life easy while staying productive.

Though there is one thing which can not be as easily automated:

## Merge conflicts

Merging is boring or hard and I am Stupid or lazy.
The easiest and most effective way of solving merge conflicts is to avoid them.


If a merge conflict occurrs then use that time to think why in the first place a conflict appeared in the first place.
If everyone is hacking away on a single file then maybe that file is too important.

We don't want any celebrity files in our project. All files are just as important.

## If you are stepping on your own toes

A pattern i have seen many times is people making a feature in one branch, then branching out in order to work on their next feature *(This is something i used to do)*.
What happens too often is the parent branch needed more changes, thus causing a downwards ripple effect.

Unless that branch and its commits are merged with master there is always a chance for breaking changes to occur.
I would not build my house on ground that could suddenly turn into lava.

The reason this happens is because they want to continue to type on their keyboard in order to create value.
Value is not made by typing furiously for 6 hours straight.
Value is made by producing good results.

<content-quote quote="The only way to go fast is to go well" person="Robert C. Martin" source="Clean architecture" icon="mdi-book-open-page-variant">
</content-quote>

Using speed to determine your worth is not a healthy mindset.
It is ok not to poop out a feature every minute.

### Patience is a virtue

Working in an iterative way will in the long run make you more efficient.

No matter how fast you work, it will all be completed at the appropriate time.
You should do it the right way, not the fast way.

If you have to wait for one of your features to go through QA in order to continue on another task, then your job as a **professional** is to be patient.