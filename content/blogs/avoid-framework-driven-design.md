---
title: Avoid framework-driven-design
description: And respect boundaries
tags: ['design', "implementation", 'architecture']
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd158-06-nap.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7992a3e1f0dd38ce0304fbe1911fb28a
readButton: Curious?
pathPrefix: blogs
readable: true
---

when you listen to some new specifications it is always fun to get right into thinking how the database schema should look like.

Doing the design with the database schema in mind will give you a worse design as you are basing your solution on somethign which has nothing to do with the domain.

#### [Scott Wlaschin](https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKksLKlMLyoyYPTiK07OLylRKM9JLE7OyMwDAKcdCvQ&q=scott+wlaschin&oq=scott+wl&aqs=chrome.1.69i57j46i512j0i10i512j46i512j0i512l3j69i65.2127j0j7&sourceid=chrome&ie=UTF-8) is the person who made me realize this trap.

# What about frameworks and domain modelling ?

Write code that clearly models your domain. Structure your code that makes it obvious what kind of domain you are in.

## Your domain does not care which framework you are using.

Tangling your code in frameworks and libraries limits you and makes your code less readable. Do not depend on a framework when doing domain modelling.

#### [Robert C. Martin](https://www.google.com/search?q=robert+c+martin&oq=robert+c+ma&aqs=chrome.0.0i355i512j46i512j69i57j46i512j0i512j46i512j0i512l4.2057j0j7&sourceid=chrome&ie=UTF-8) is a person who talks a lot about this topic