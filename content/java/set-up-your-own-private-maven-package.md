https://stackoverflow.com/questions/51091539/maven-site-plugins-3-3-java-lang-classnotfoundexception-org-apache-maven-doxia
https://stackoverflow.com/questions/14013644/hosting-a-maven-repository-on-github
https://www.baeldung.com/maven-repo-github

first i created a branch named

super-nice-repo

https://www.baeldung.com/maven-repo-github

which contained a brand new maven project

i also had to update my local m2 which is located in your home folder `cd` `.m2/settings.xml`
```xml

<server>
    <id>github</id>
    <username>kristus123</username>
    <password>github token</password>
</server>
```

I gave it all access, and i also had to `edit profile` https://github.com/kristus123 and set my name or else it crashed


here is my `pom.xml`
```xml

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>pappa</artifactId>
    <version>1.0-SNAPSHOT</version>

    <url>https://github.com/kristus123/pappa.git</url>

    <distributionManagement>
        <repository>
            <id>internal.repo</id>
            <name>Temporary Staging Repository</name>
            <url>file://${project.build.directory}/mvn-repo</url>
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

    <properties>
        <github.global.server>github</github.global.server>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>

    <scm>
        <url>https://github.com/kristus123/pappa.git</url>
        <connection>scm:git:git@github.com:kristus123/kristus123.git</connection>
        <developerConnection>scm:git:git@github.com:kristus123/kristus123.git</developerConnection>
    </scm>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-source-plugin</artifactId>
                <version>3.1.0</version>
                <executions>
                    <execution>
                        <id>attach-sources</id>
                        <goals>
                            <goal>jar</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>com.github.github</groupId>
                <artifactId>site-maven-plugin</artifactId>
                <version>0.12</version>
                <configuration>
                    <message>Maven artifacts for ${project.version}</message>
                    <noJekyll>true</noJekyll>
                    <outputDirectory>${project.build.directory}</outputDirectory>
                    <branch>refs/heads/mvn-repo</branch>
                    <includes>
                        <include>**/*</include>
                    </includes>
                    <merge>true</merge>
                    <repositoryName>pappa</repositoryName>
                    <repositoryOwner>kristus123</repositoryOwner>
                    <server>github</server>
                </configuration>
                <executions>
                    <execution>
                        <goals>
                            <goal>site</goal>
                        </goals>
                        <phase>deploy</phase>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <artifactId>maven-deploy-plugin</artifactId>
                <version>2.8.2</version>
                <configuration>
                    <altDeploymentRepository>
                        internal.repo::default::file://${project.build.directory}/mvn-repo
                    </altDeploymentRepository>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-source-plugin</artifactId>
                <version>3.1.0</version>
                <executions>
                    <execution>
                        <id>attach-sources</id>
                        <goals>
                            <goal>jar</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

    <repositories>
        <repository>
            <id>PROJECT-REPO-URL</id>
            <url>https://github.com/kristus123/pappa/mvn-repo</url>
            <snapshots>
                <enabled>true</enabled>
                <updatePolicy>always</updatePolicy>
            </snapshots>
        </repository>
    </repositories>

</project>
```



in order to use this maven shit you need to add this to your other project

```xml
<repositories>
        <repository>
            <id>super-nice-repo-mvn-repo</id>
            <url>https://raw.github.com/kristus123/pappa/mvn-repo/</url>
            <snapshots>
                <enabled>true</enabled>
                <updatePolicy>always</updatePolicy>
            </snapshots>
        </repository>
    </repositories>

    <dependencies>
        <dependency>
            <groupId>org.example</groupId>
            <artifactId>pappa</artifactId>
            <version>2.0-SNAPSHOT</version>
        </dependency>
    </dependencies>
```
