---
title: log in if you are over 18
description: wowowo
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readButton: Curious?
readable: true
---


- Lag en funksjon som sjekker om bruker er over 18
  - hvis bruker er over 18, vis velkomstmelding
  - hvis bruker ikke er 18, ikke gi tilgang


## v0.0.1

**Review**

```js
function ageCheck(){
  if userIsAbove = true
}

```

**Kristian**:

- mangler argument
- if-else logikken var ufullstendig

gjør slik

function ageCheck(age){
  if (age >= 18) {
    return "welcome"
  }
  else {
    return "denied"
  }
}

## v0.0.2

function ageCheck(age) {
  if (age >= 18) {
    return "Velkommen"
  }
  else{
    return "sayonara"
  }
}
**kristian**

- perfect!
