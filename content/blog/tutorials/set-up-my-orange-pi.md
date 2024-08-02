---
title: set up my orange pi
description: swag
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---

## The small ones

They are orange pi zero's, not orange pi zero 2's (apparently)

- [install image](https://www.armbian.com/orange-pi-zero/)
- root password is 1234
- use this `nmap -sP 192.168.10.1/24` to find the ip

After setting up user and other stuff (set user to 'kristian')

## run these commands in kristian user

```shell
sudo apt update -y 
sudo apt upgrade -y

sudo apt install htop -y
sudo apt install ufw -y
sudo apt install nginx -y
sudo apt install snapd -y

snap install core
snap install hello-world
snap install --classic certbot

ln -s /snap/bin/certbot /usr/bin/certbot

sudo ufw --force enable
sudo systemctl enable ufw

sudo ufw default allow outgoing
sudo ufw default deny incoming

sudo ufw allow 443
sudo ufw allow 80
sudo ufw allow ssh

# Install ssh key
ssh-keygen -t ed25519 -C "your@email.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

echo "________"
cat ~/.ssh/id_ed25519.pub
echo "________"
```
