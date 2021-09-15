---
title: How to pass an object to a new activity
description: Quick and simple solution
tags: ["android studio", 'kotlin']
coverImage: https://www.pngrepo.com/download/303617/kotlin-1-logo.png
readButton: Read more
pathPrefix: blogs
readable: true
---

How to pass an object to a new activity

```kotlin

data class Person {
    val name: String,
    val age: Int,
    val country: String
} : Serializable
```


```kotlin

btn.setOnClickListener {
    Intent(this, OtherActivity::class.java).also {
        it.putExtra("PERSON", Person("kristian", 50, "Norway"))
        startActivity(it)
    }
}
```


```kotlin

override fun onCreate(...) { // OtherActivity.kotlin
    ...

    val person = intent.getSerializableExtra("PERSON") as Person // cast Serializable object to Person
}
```

