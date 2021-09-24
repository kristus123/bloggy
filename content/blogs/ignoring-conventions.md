---
title: What is wrong about breaking conventions
description: And why are not people doing it more often
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd223-pdzhengyan00044-image.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a3aa8ff9a6a62f81a96500e558ece500
readButton: wow
readable: true
pathPrefix: blogs
---

Why should you not just put multiple classes in the same file ?

```java


@Embeddable
class CandyId {
    private String label;
    private String name;
}

@Entity
class AccountBalance {

    @EmbeddedId
    private CandyId candyId;

    private int quantity;
}

@Repository
interface CandyRepository {
}

```

The same goes with objects returned by a method

```java


Class CandyService {
    public static class Candy {
        String name;
        int amount;
    }

    public Candy getCandy(String name) {
        return new Candy(name, candyQuantity(name))
    }
}
```

Please tell me what is wrong with this