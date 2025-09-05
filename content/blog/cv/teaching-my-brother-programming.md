---
title: teaching my brother programming
description: wowowo
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readButton: Curious?
readable: true
---



# Lag en variabel som er en string:

Du skrev:

let sayHello = Hello
MEN, dette er feil. hva er feil?

<details>

<summary>ANSWER</summary>

HUSK QUOTATIONS

let sayHello = "Hello"

</details>

# Lag en funksjon som sier hallo

Du skrev:

```js
function () {
  console.log("hello")
}
```

MEN, dette er feil. hva er feil?

<details>

<summary>ANSWER</summary>

FUNKSJONEN MÅ OGSÅ HA ET NAVN

```js
function printHello() {
  console.log("hello")
}
```

</details>


# Logg inn hvis du er over 18

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
# Display message to the user

- we now have a method that checks their age
  - now we need to show them a message


# v0.0.1

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



# v0.0.2


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


# variabeler og sammenligning

```js
let trening = "gøy"

console.log(trening)

if trening == bevegelse {
  console.log("sunt")
}
else {
  console.log(usunt)
}
```

<details>

<summary>ANSWER</summary>

- husk `()` når du lager `if ()`
- `usunt` er ikke definert
- `bevegelse` er heller ikke definert

```js
let trening = "gøy"

console.log(trening)

if (trening == "bevegelse") {
  console.log("sunt")
}
else {
  console.log("usunt")
}
```

</details>

# hva printer denne koden?

```js
let trening = "gøy"

console.log(trening)

if (trening == "bevegelse") {
  console.log("sunt")
}
else {
  console.log("usunt")
}
```

**Andreas**:

sunt

<details>

<summary>ANSWER</summary>

Den printer

```
usunt
```

fordi:

trening er en variabel med verdi `gøy`

så hvis vi bytter ut alle steder hvor variabelen er brukt, ser det slik ut:

```js
console.log("gøy")

if ("gøy" == "bevegelse") {
  console.log("sunt")
}
else {
  console.log("usunt")
}
```

`"gøy" == "bevegelse"` vil da returnere `false` noe som gjør at koden i `else {}` vil bli kjørt

</details>
