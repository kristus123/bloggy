---
title: Set up github webhook on debian
description: draft
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---

## Set up webhook

https://github.com/adnanh/webhook

sudo apt-get install webhook


## 1. Make a script

**NB!** You have to put `#!/bin/sh` at the top of the `.sh` file

## 2. make webhook config file

```json
[
  {
    "id": "run-script",
    "execute-command": "/home/kristian/test/script.sh",
    "command-working-directory": "/home/kristian/test"
    "pass-arguments-to-command":
    [
      {
        "source": "payload",
        "name": "head_commit.id"
      },
      {
        "source": "payload",
        "name": "pusher.name"
      },
      {
        "source": "payload",
        "name": "pusher.email"
      }
    ],
    "trigger-rule":
    {
      "and":
      [
        {
          "match":
          {
            "type": "payload-hmac-sha1",
            "secret": "mysecret",
            "parameter":
            {
              "source": "header",
              "name": "X-Hub-Signature"
            }
          }
        },
        {
          "match":
          {
            "type": "value",
            "value": "refs/heads/master",
            "parameter":
            {
              "source": "payload",
              "name": "ref"
            }
          }
        }
      ]
    }
  }
]
```

start up and test out


```sh
webhook --hooks x.json -verbose
```

Test out the webhook

```sh
 curl http://10.0.0.13:9000/hooks/redeploy-webhook
```

https://github.com/adnanh/webhook/blob/master/docs/Hook-Examples.md#incoming-github-webhook
create webhooks with a secret. put the secret in mysecret ?
