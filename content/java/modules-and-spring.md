---
title: Java 9 modules and Spring
description: Set up a modularized monolith with a Spring service 
tags: ['fruit', 'microservices']
readButton: Encapsulation FTW
pathPrefix: java
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd158-07-nap.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=472b45eb468b2a6b704de93b4a06f051
readable: true
---

I did this together with maven modules with the help of Intellij.

I first generated a clean maven project, then i dragged in a spring-maven project into the project

Spring has a default parent.
I had to first change


i found the latest `spring.boot.version` [here](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot)
```xml


<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<artifactId>mainshit</artifactId>
		<groupId>org.example</groupId>
		<version>1.0-SNAPSHOT</version>
	</parent>

	<artifactId>demo</artifactId>
	<name>demo</name>

	<description>Demo project for Spring Boot</description>

	<properties>
		<java.version>11</java.version>
		<spring.boot.version>2.5.5</spring.boot.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
			<version>${spring.boot.version}</version>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-dependencies</artifactId>
			<version>${spring.boot.version}</version>
			<type>pom</type>
			<scope>provided</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<version>${spring.boot.version}</version>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<version>${spring.boot.version}</version>
				<executions>
					<execution>
						<goals>
							<goal>repackage</goal>
						</goals>
					</execution>
				</executions>
			</plugin>
		</plugins>
	</build>
</project>
```


in the `main pom.xml` i had to add the module like so:

```xml
<modules>
    <module>springmodule</module>
</modules>
```


there was also some problems with the "drag-and-dropped" spring project that it was ignored.

This was solved by the following
1. click maven in top right
2. right-click and select `unignore project`

### the cool thing about maven modules is that you only have to rely on one module to get somethign. That is good ass encapsulation

# Using java modules

Give all your src/java folders a `module-info.java` and you are good to go.

## the convention for making modules seems to be:
If your top package is named `com.shop.database`, then that is what your module-info should be named as well
```java
module com.shop.database {}
```

Of course you might have packages like `com.shop.database.config`, but that is a sub-package.

A good naming conventions for modules seems to be
name your modules with the same path, but differentiate them like this

```java
module com.shop.database {}
```

```java
module com.shop.controllers {}
```

```java
module com.shop.shoppingcart {}
```

## Spring
Spring is big on reflection so you will need some additional setup there.

Add this to `vm arguments`
```bash
# my.api = the spring module in your system that has the spring dependencies
--add-reads my.api=ALL-UNNAMED
```
This allows Spring to do its *"reflection magic"*.

And then you need to `require` all the packages you want to use.
```java
module my.api {
    requires spring.boot;
    requires spring.boot.autoconfigure;
    requires spring.web;

    opens my.api.server; // Note this is also required, or else it will crash
}
```

## If you want to use a module in another module you can do like this

```xml
<dependency>
    <groupId>org.example</groupId>
    <artifactId>subshit</artifactId>
    <version>1.0-SNAPSHOT</version>
    <scope>compile</scope>
</dependency>
```

## Some quick fun facts

- Everyone inherits the dependencies from the master pom