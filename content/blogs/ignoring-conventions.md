---
title: What is wrong about breaking conventions
description: And why are not people doing it more often
coverImage: https://image.freepik.com/free-vector/flower-vector-botanical-art-print-remixed-from-artworks-by-hu-zhengyan_53876-116347.jpg
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


public static class Candy {
    String name;
    int amount;
}

public Candy getCandy(String name) {
    return new Candy(name, candyQuantity(name))
}
```

Please tell me what is wrong with this