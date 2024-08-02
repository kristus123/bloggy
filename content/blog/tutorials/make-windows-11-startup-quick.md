---
title: Make Windows 11 startup quick
description: Tutorial
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---

## First

Download and set up Autologon:

[https://learn.microsoft.com/en-us/sysinternals/downloads/autologon]()


## Second

Run this code in cmd:

*This will wait 2 seconds, then it will lock the computer every time you start your computer*

```
echo ping -n 2 127.0.0.1 > nul > "C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\lock_computer.bat"
echo rundll32.exe user32.dll, LockWorkStation >> "C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\lock_computer.bat"
```
