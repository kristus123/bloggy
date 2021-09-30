

<p class="text-left title">
            Jobben handlet om å sette opp en kobling mellom et system som
            utførte automatisk kjøp og salg av kryptovalutaen
            <a target="_blank" href="https://ethereum.org/">Ethereum</a>.
          </p>

          <p class="text-left">
            Løsningen innebar å sette opp en
            <strong>MQ-server</strong> som gjorde at deres systemer hadde
            muligheter til å snakke med en <strong>Mysql database</strong> som
            deretter ble brukt for å snakke med noen andre tjenester.
          </p>

          <p class="text-left">
            Prosjektet krevde å håndtere en stor kvantitet med queries, og med
            så nærmest mulig "real-time" som mulig. Jeg oppnådde dette med å
            sette opp en task queue for å behandle lasten av queries som ble
            generert
          </p>

          <p class="text-left">
            I tillegg trengte de et API for autentisering som ble satt opp med
            bruk av Python og Flask
          </p>

          <p class="title text-left mt-8">
            Jeg lagde en kjapp
            <a
              target="_blank"
              href="https://docs.google.com/presentation/d/1LXkCFgN9XUgF9BPWpkgx5dKs_0N6PCF4NRtT8xB3AAw/edit?usp=sharing"
              >Presentasjon</a
            >
            for å snakke om dette prosjektet, da source-koden ikke var mulig for
            meg å beholde
          </p>