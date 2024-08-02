---
title: Run sudo commands without password
description: Quick and dirty
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd20-016-jj.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f5c3d7ff2068c623837fd51dfc065cf4
readButton: Curious?
readable: true
---

Run this command to open a file

```bash
sudo EDITOR=nano visudo
```

Add this to the bottom of the file:

```bash
$username$ ALL=(ALL) NOPASSWD:ALL
```


## Disable password prompt for one command

It is possible to avoid being prompted for your password when logging in with `gproxy2`.

1. Create a new file

```bash
nano /private/etc/sudoers.d/gproxy2
```

2. Add the following line

```
$username$ ALL = (root) NOPASSWD: /usr/bin/bash
```
