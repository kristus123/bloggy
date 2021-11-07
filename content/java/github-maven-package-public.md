---
title: Create your own public maven package to share with the world
description: Awesome!
tags: ['fruit', 'microservices']
readButton: Nice!
pathPrefix: java
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd158-07-nap.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=472b45eb468b2a6b704de93b4a06f051
readable: false
---



settings.xml
```xml
<servers>
    <server>
        <id>github</id>
        <username>kristus123</username>
        <password>access_token_generated</password>
    </server>
...
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <distributionManagement>
        <repository>
            <id>github</id>
            <name>kristus123</name>
            <url>https://maven.pkg.github.com/kristus123/pappa/</url>
        </repository>
    </distributionManagement>

    <profiles>
        <profile>
            <id>github</id>
            <repositories>
                <repository>
                    <id>github</id>
                    <url>https://maven.pkg.github.com/kristus123/pappa</url>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </repository>
            </repositories>
        </profile>
    </profiles>

    <groupId>org.example</groupId>
    <artifactId>pappa</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>

</project>
```


```bash
run mvn deploy
```