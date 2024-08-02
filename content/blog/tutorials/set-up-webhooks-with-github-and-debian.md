---
title: Set up github webhook on debian
description: draft
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---

## Set up webhook

More info at their [Github page](https://github.com/adnanh/webhook)

```shell
sudo apt-get install webhook
```

## 1. Make a script

**NB!** You have to put `#!/bin/sh` at the top of the `.sh` file

## 2. make webhook config file

You can name it `config.json`

```json
[
  {
    "id": "run-script",
    "execute-command": "/home/kristian/test/script.sh",
    "command-working-directory": "/home/kristian/test"
  }
]
```

start up and test out

```sh
webhook --hooks config.json -verbose
```

Test out the webhook

```sh
 curl http://10.0.0.13:9000/hooks/run-script
```

https://github.com/adnanh/webhook/blob/master/docs/Hook-Examples.md#incoming-github-webhook
create webhooks with a secret. put the secret in mysecret ?
