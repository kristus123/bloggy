---
title: Set up node environment
description: draft
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---

```sh
sudo apt update -y && sudo apt upgrade -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

source ~/.bashrc

nvm install 21.4.0 // this is used in neovim config

nvm install node # latest
```
