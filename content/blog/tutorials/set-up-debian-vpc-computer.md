---
title: Setting up debian 11 vpc/computer
description: draft
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readable: true
---

```bash
apt update -y 
apt upgrade -y


curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk version

apt install nginx -y

apt install snapd -y
snap install core

snap install hello-world

snap install --classic certbot

ln -s /snap/bin/certbot /usr/bin/certbot


apt-get remove docker docker-engine docker.io containerd runc

apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release -y

curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update -y

apt-get install htop -y

apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y

docker run hello-world

apt install ufw -y

ufw --force enable
systemctl enable ufw

ufw default allow outgoing
ufw default deny incoming

ufw allow 443
ufw allow 80
ufw allow ssh

# Install ssh key
ssh-keygen -t ed25519 -C "your@email.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

echo "________"
cat ~/.ssh/id_ed25519.pub
echo "________"
```


# Set up swap

Sjekk at ikke noe allerede er satt

```bash
swapon -s
free -m
```

## Lag en swap fil på 4GB.

```bash
fallocate -l 4G /swapfile

chmod 600 /swapfile 

mkswap /swapfile 
swapon /swapfile 
```

## Sjekk at den dukket opp

```bash
swapon -s
free -m
```

## Gjør den permanent

```bash
nano /etc/fstab

# Legg til på siste linje
/swapfile   none    swap    sw    0   0

```

## Velg "swappiness level"

```bash
nano /etc/sysctl.conf 
vm.swappiness=10

```

### What is swappiness level ?

- 0: swap is disable
- 1: minimum amount of swapping without disabling it entirely
- 10: recommended value to improve performance when sufficient memory exists in a system
- 100: aggressive swapping

[Source](https://linuxhint.com/understanding_vm_swappiness/)