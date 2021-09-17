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

<?xml?>
<project>
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>super-nice-repo</artifactId>
    <packaging>pom</packaging>
    <version>1.0-SNAPSHOT</version>

    <url>https://github.com/sgrverma23/host-maven-repo-example.git</url>

    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <configuration>
                        <source>11</source>
                        <target>11</target>
                    </configuration>
                </plugin>
            </plugins>
        </pluginManagement>

        <plugins>
            <plugin>
                <artifactId>maven-deploy-plugin</artifactId>
                <version>2.8.2</version>
                <configuration>
                    <altDeploymentRepository>
                        internal.repo::default::file://${project.build.directory}/mvn-artifact
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
                    <repositoryName>super-nice-repo</repositoryName>
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
        </plugins>
    </build>

    <repositories>
        <repository>
            <id>super-nice-repo-mvn-repo</id>
            <url>https://raw.github.com/kristus123/super-nice-repo/mvn-repo/</url>
            <snapshots>
                <enabled>true</enabled>
                <updatePolicy>always</updatePolicy>
            </snapshots>
        </repository>
    </repositories>

    <dependencies>
        <dependency>
            <groupId>org.example</groupId>
            <artifactId>anal</artifactId>
            <version>1.0-SNAPSHOT</version>
            <scope>compile</scope>
        </dependency>
    </dependencies>


    <distributionManagement>
        <repository>
            <id>internal.repo</id>
            <name>Temporary Staging Repository</name>
            <url>file://${project.build.directory}/mvn-repo</url>
        </repository>
    </distributionManagement>

    <properties>
        <github.global.server>github</github.global.server>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>

</project>
```