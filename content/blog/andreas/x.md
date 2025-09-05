---
title: hva skjer her?
description: wowowo
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd48batch9-10-nap_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2c65ba4fca60aae1f04eead317aeb992
readButton: Curious?
readable: true
---

hva skjer når vi kjører denne koden?

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
