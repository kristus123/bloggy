---
title: Display message to the user
description: wowowo
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readButton: Curious?
readable: true
---


- we now have a method that checks their age
  - now we need to show them a message


## v0.0.1

```
function ageCheck(age) {
  if (age >= 18) {
    h1(velkommen)
  }
  else{
    h1(Deny)
  }
}

function h1(tekst){
      const heading = document.createElement("h1");
    heading.textContent = "Hello, this is an H1 created with JavaScript!";
    document.body.appendChild(heading);
}
```

<details>

<summary>ANSWER</summary>

- flytt h1 på toppen slik at ageCheck har tilgang til den
  - kanskje det hadde funket, usikker på hvordan js håndterer det
  - du har glemt å putte quotation marks på "velkommen" og "deny"


```
function h1(tekst){
      const heading = document.createElement("h1");
    heading.textContent = "Hello, this is an H1 created with JavaScript!";
    document.body.appendChild(heading);
}

function ageCheck(age) {
  if (age >= 18) {
    h1("velkommen")
  }
  else{
    h1("deny")
  }
}
```

</details>



## v0.0.2


```js
function h1(tekst){
      const heading = document.createElement("h1");
    heading.textContent = "Hello, this is an H1 created with JavaScript!";
    document.body.appendChild(heading);
}
```

<details>

<summary>ANSWER</summary>

- husk at for å faktisk vise teksten du ønsker å vise `h1('welcome')` så må du ta i bruk argument `tekst`.

```js
function h1(tekst) {
      const heading = document.createElement("h1");
    heading.textContent = tekst
    document.body.appendChild(heading);
}
```

</details>


