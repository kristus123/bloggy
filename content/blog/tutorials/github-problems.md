---
title: Github problems?
description: draft
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---

Simple fix for

```sh
...
error: object file .git/objects/e1/ref is empty
error: object file .git/objects/e1/ref is empty
fatal: loose object e1ref (stored in .git/objects/e1/ref) is corrupt
```

```sh
...
find .git/objects/ -size 0 -exec rm -f {} \;
git fetch origin
```

[source](https://accio.github.io/programming/2021/06/16/fix-loose-objects-in-git.html)
