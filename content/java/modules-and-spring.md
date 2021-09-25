---
title: Java 9 modules and Spring
description: Make life easy for others by making life easy for yourself
tags: ['fruit', 'microservices']
readButton: wow
pathPrefix: java
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd158-07-nap.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=472b45eb468b2a6b704de93b4a06f051
readable: false
---

no.api = the spring module in your system
--add-reads no.api=ALL-UNNAMED


you need to do this as well in your `module-info.java` file

requires no.store;
requires spring.boot;
requires spring.boot.autoconfigure;
requires spring.web;

opens no.api.server;