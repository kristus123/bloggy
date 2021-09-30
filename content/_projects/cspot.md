---
title: Cspot
description: Don't spend your time in ways you don't want to
technologies: [
            'Python',
            'Flask',
            'Celery',
            'Mysql',
            'Javascript',
            'Ethereum',
            'Blockchain',
            'RabbitMQ',
            'Redis',
            'Git',
            'Linux',
            'Nginx',
            'Uwsgi',
          ]
image: https://coincentral.com/wp-content/uploads/2017/08/ethereum.png
year: "2019"
months: "3"
workPlace: freelance
---

Jobben handlet om å sette opp en kobling mellom et system som
utførte automatisk kjøp og salg av kryptovalutaen Ethereum.

Løsningen innebar å sette opp en
**MQ-server** som gjorde at deres systemer hadde
muligheter til å snakke med en **Mysql database** som
deretter ble brukt for å snakke med noen andre tjenester.

Prosjektet krevde å håndtere en stor kvantitet med queries, og med
så nærmest mulig "real-time" som mulig. Jeg oppnådde dette med å
sette opp en task queue for å behandle lasten av queries som ble
generert

I tillegg trengte de et API for autentisering som ble satt opp med
bruk av Python og Flask

Jeg lagde en kjapp presentasjon ("https://docs.google.com/presentation/d/1LXkCFgN9XUgF9BPWpkgx5dKs_0N6PCF4NRtT8xB3AAw/edit?usp=sharing")
for å snakke om dette prosjektet, da source-koden ikke var mulig for
meg å beholde