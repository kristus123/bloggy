---
title: Setting up nginx with duckdns + certbot
description: draft
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---

## 1. Install nginx

# NB! i have no idea how to set up the security shit

### step 1

```bash
sudo apt install nginx -y
sudo apt install uwf -y
sudo apt install snapd -y
sudo reboot now
```

### step 2

```bash
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

## 2. Create a config

```bash
sudo nano /etc/nginx/sites-available/sample.org
```

```bash
server {
    listen 80;
    server_name poop69.duckdns.org;

    location / {
        proxy_pass http://127.0.0.1:8080;
    }
}
```

## 3. symlink file

**NB!**: absolute path required.

```bash
sudo ln -s /etc/nginx/sites-available/sample.org /etc/nginx/sites-enabled/sample.org
```

## 4. open up ports

```bash
sudo ufw allow 80
sudo ufw allow 443
```

## 5. Open up tcp 80 and tcp 443 in your router

Open up tcp 80 and tcp 443 in your router


## 6. generate certificates

```bash
sudo certbot --nginx
```

## 7. verify

```bash
sudo certbot renew --dry-run  
```
