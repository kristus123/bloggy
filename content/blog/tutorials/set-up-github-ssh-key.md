---
title: Set up github ssh key (Windows/Linux)
description: yeehaw
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---



1. have `git bash` installed

**NB!** you have to use the email associated with your github, or else you will get error.

```
ssh-keygen -t ed25519 -C "your email"
```

```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

```
clip < ~/.ssh/id_ed25519.pub
```

[add ssh key to github](https://github.com/settings/ssh/new)
