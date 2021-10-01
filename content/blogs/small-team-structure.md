---
title: system architecture
description: micro service
tags: ['']
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd158-06-nap.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7992a3e1f0dd38ce0304fbe1911fb28a
readButton: Read more
pathPrefix: blogs
readable: false
---

There are many good reasons why structuring your organization into smaller teams is a good approach.
Giving teams responsibility makes them proud of delivering requested features as they are responsible for its quality and stability.

But what about "physically" structuring your system into smaller components _

microservices and microservice acrhitecture is a hot topic. All large companies has taken use of this way of structuring their IT infastructure.
Facebook, Netflix, Amazon, etc.

## The reason why they use such architecture is of its many benefits which suits for larger projects.

- autonomous and independent teams
- possibility to scale services based on how much load they are receiving, thus being able to reduce server capacity where it is not needed.
- highly decoupled systems, where a service might only be responsible for one thing
- one service can consume features from another service without caring how it implements it. All it needs to know is that the service will do its job perfectly.
- independently deployed
- if something crashes, not all servies crashes, which reduces downtime
- smaller code bases makes it easier for developers to jump into the code

microservices seems to be fixing many problems that people might encounter throughout the lifecycle of a project.

Another reason why such big companies take use of such architecture is also for more reasons that often are not mentioned when people are listing the benefits.
Such companies have thousands of engineers, all working in multiple teams with different responsibilities while simultaniiiiiously work together with multiple teams.

Microservices are used for scaling people. Having two thousand developers all generating features requires a structure that allows them to move quickly.

However, there are downsides of microservice architecture. Nothing is free in this world.
- requires more maintanence
- different types of complexity are introduced as a result
- harder debugging
- The cost of setting up such architecture is much higher, and you might never come to a point where microservices pay off
- Not every company needs the same amount of scalability or resilience as Netflix.

 Complexity is one of many prices you need to pay.

 Even if you decide to follow this architecture, you still need to properly execute it, which might be hard.
 If your teams has a track record of failing to uphold conventions and not able to build robust and stable software, those are problems that microservises will not fix.

 This is not a silver bullet, and will not fix your problems. It will solve problems that some companies have, at the cost of complexity.

 Before starting with microservices, you should be able to create well-structured projects and monolithic applications. People think the word monolith means bad and ugly codebase, that is not the case. just like it exists tons of monolith projects that are worse than breaking your feet, there will also be microservices that will make you scream in agony.

 Bad code is bad code and bad architecture is bad architecture. No matter what design principles you decide to go for, you can-t expect a magic pill that will make life easy for you. Making good architecture requires work. Nothing comes for free.

 Monolith applications also has its downsides, but a well strucutred modular monolith can easily be migrated to a microservice if the benefits of such arcitecture starts to outweight the monolithic strucutre.