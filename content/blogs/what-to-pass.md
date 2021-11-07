---
title: A word on method parameters 
description: How to decide what parameters you should pass
tags: ['design', "implementation", 'architecture']
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd42-63143350-rob.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=603a9513ed3ebc00ecdc5620f495d81a
readButton: Curious?
pathPrefix: blogs
readable: true
---

It is all about the context and what makes sence.

does it make sense to pass the object ?
or does theo bject by random luck have all required fields?

example
getCompany(userObject)
getCompany(userId, organisationNumber)

information hiding is the most powerful we have, but it is a plus to make connections as obvious as possible.

Limiting connections will simplify your system, that's why passing single value arguments is a good thing (when it is appropriate of ocuse)

Steve McConnel: "you get bonus points for making things obvious"