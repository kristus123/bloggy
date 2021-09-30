<template>
  <div>
    <p class="white--text">{{pages}}</p>
    <TextTitle class="white--text mt-8" title="Some projects i have worked on" />
    <center>
      <h2 class="white--text font-weight-thin"><span style="color:red;">*</span> Will translate to English. The text also need some cleanup</h2>
    </center>
    <v-row>
      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Cspot"
          description="Utvikling av ønskede tjenester"
          imageUrl="https://coincentral.com/wp-content/uploads/2017/08/ethereum.png"
          :technologyUsed="[
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
          ]"
          amountOfMonths="3 måneder"
          yearFromTo="2019"
        >
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
        </CvProjects>

        <!-- men som ikke hadde mulighet til å kommunisere med en database.  -->
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Homepo"
          description="En saas-tjeneste"
          amountOfMonths="Pågående"
          yearFromTo="2017-"
          imageUrl="https://i.gyazo.com/16d83ff79997b114949766dda140fa53.png"
          :technologyUsed="[
            'Python',
            'Flask',
            'Java',
            'Spring',
            'Chalice',
            'Zappa',
            'Vue',
            'Linux',
            'AWS',
            'Uwsgi',
            'Heroku',
            'Mysql',
            'Gmail API',
            'Web scraping',
            'Celery',
            'Task queue',
            'JWT',
            'Microservice architecture',
            'Git',
            'Github',
            'Laget en tjeneste som er inspirert av Jenkins som dekker mine behov ',
          ]"
        >
          <p class="text-left">
            En tjeneste som gjør det veldig lett for personer som driver med
            kjøp og salg av produkter (Dropshipping). Ved å utnytte de fleste
            butikkers "90-dagers prismatch",
          </p>

          <p class="text-left title">
            Henter inn alle kjøp som blir gjort av brukeren via Gmail, og legger
            produktene inn i systemet.
          </p>

          <p class="text-left">
            deretter vil den følge med om prisene endrer seg, og gir beskjed om
            noe har gått ned i pris.
          </p>

          <p class="title text-left">
            Fokuset har vært at nettsiden skal være så skalerbar og
            vedlikeholdsfri som mulig.
          </p>
          <p class="text-left">
            I tillegg holder den kontroll på alle gavekortene, og holder
            balansene oppdatert. Gavekortene blir hentet fra brukerens epost(er)
            og lagt inn i systemet.
          </p>

          <p class="text-left title">
            De fleste sparer $500-1000 i måneden, og jeg har 5 aktive brukere.
          </p>
        </CvProjects>
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Lær kidsa koding"
          amountOfMonths="3 dager hvert år"
          yearFromTo="2019-"
          description="Askøy Kommune"
          :technologyUsed="['Python']"
          imageUrl="https://www.kslaring.no/local/course_page/pluginfile.php/630825/course/homesummary/AK_logo_hvit_kvadrat.png"
        >
          <p class="text-left title">
            Jeg har vært heldig å få være den som holder sommeraktiviteten
            <strong>'Lær kidsa koding' i mange år på rad.</strong>
          </p>

          <p class="text-left">
            Dette er en aktivitet hovedsaklig arrangert av Askøy kommune, som
            strekker seg over 3 dager i sommerferien.
          </p>
          <p class="text-left">
            Jeg ser på dette kurset som en fin måte for meg å både lære de hva
            programmering egentlig innebærer, men også gi de muligheten for å
            tidlig finne ut om dette er noe de muligens har lyst til å jobbe
            videre med eller jobbe fulltid med.
          </p>
          <p class="text-left title">Kurset er for ungdommer mellom 13-17.</p>
        </CvProjects>
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Orange money"
          description="Automatisering"
          amountOfMonths="4 måneder"
          yearFromTo="2018"
          imageUrl="https://lh3.googleusercontent.com/jKIF7dj8Qs3_Tnuaq-vLBe_kdvsyF55pR4ymNW5u3-W0KdkhM_ymAsfWymRMIH6JT_Y"
          :technologyUsed="['Python', 'Mysql', 'Windows Server']"
        >
          <p class="text-left title">
            Dette oppdraget besto av mange små prosjekter som de ønsket utført
            for å effektivisere sin drift.
          </p>
          <p class="text-left">
            Jeg må grave litt i meldinger for å finne ut hva jeg gjorde, men det
            var automatisering av repetetive oppgaver, og overvåkning av
            databasen.
          </p>
        </CvProjects>
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Accellerlist.com"
          description="Videreutviklet API"
          imageUrl="https://i.gyazo.com/2bb135d032766493b5dfb7c3bba84bf5.png"
          :technologyUsed="['Python', 'Flask', 'Heroku']"
        >
          <p class="text-left title">
            Utvilker for
            <a href="https://www.accelerlist.com/" target="_blaank"
              >Accelerlist</a
            >
          </p>
          <p class="text-left">Refaktorering og testing av gammel kodebase</p>
        </CvProjects>
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="3gProxy"
          amountOfMonths="Pågående"
          yearFromTo="2017-"
          imageUrl="https://media.licdn.com/dms/image/C560BAQHOtgKbYPRl-A/company-logo_200_200/0?e=2159024400&v=beta&t=DdBIzHQEoObqEQefFfb1riLbHDQ8w-VrqFpMSozGwxw"
          description="drift og vedlikehold"
          :technologyUsed="['Linux']"
        >
          <p class="text-left title">
            Drift av en server som er fysisk basert i Norge for en bedrift som
            driver med testing av sending av SMS-er.
          </p>
          <p class="text-left">
            Dette består for det meste av feilsøking og fakturering til norske
            mobilleverandører.
          </p>

          <p class="text-left title">
            Målet er å være et bindeledd mellom
            <a href="https://3gproxy.com/" target="_blank">3gProxy</a> og det
            norske mobiloperatør markedet
          </p>
        </CvProjects>
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Loop ai labs"
          description="ML og NLP"
          :technologyUsed="['kake', 'nam']"
          imageUrl="https://www.prlog.org/12595793-new-loop-logo.png"
        >
          I dette prosjektet var målet å konvertere norske setninger og ord til
          noe som en datamaskin kunne forstå. Konsulenten brukte diverse
          python-bibliotek som NLTK (Natural language toolkit) og Scikit. Her
          klarte Kristian å overraske dem som ønsket dette gjort. De forventet
          at 50-60% av dataen ville bli suksessfullt, men han klarte å få til
          80-90% av dataen som ble prosessert. Setningene skulle bli sortert i
          forskjellige kategorier, som f.eks; Butikker, verb, substantiv.
          Setningene skulle bli separert og deretter kategorisert
        </CvProjects>
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Ticket-system"
          description="Askøy Kommune"
          :technologyUsed="['kake', 'nam']"
          imageUrl="https://www.kslaring.no/local/course_page/pluginfile.php/630825/course/homesummary/AK_logo_hvit_kvadrat.png"
          >Under fagprøven Lagde Kristian et responsivt og "lett å bruke" system
          for både teknikerne og brukerne. Inspirasjonen var fra Ticket-systemet
          som var i bruk i Kommunen, som Kristian mente ikke var et produktivt
          verktøy, og som han så mange forbedringer i.</CvProjects
        >
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Hack the crisis"
          description="Sammen med Experis"
          :technologyUsed="['Gode ideer', 'system architecture']"
          imageUrl="https://www.ks.no/imagevault/publishedmedia/5pd9nihordk1g3azg7mn/HackCrisis.jpg"
          >En hackaton for å finne på nye løsninger relatert til
          covid</CvProjects
        >
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Krypto mining"
          description="Sammen med en venn"
          :technologyUsed="['Gode ideer', 'system architecture']"
          imageUrl="https://lh3.googleusercontent.com/GgW2ocv_0UkD1Lx4VzsKfCkJx0RkZDtpqeXjdVU73nKV6Bsm70qTWum_89iOyU91RZ9Lm69vxmXxZEknb56lvU1s_7Wbpap5EAPj1pLqI4DyXYzr1aNlz88s93DQR2FqAuDXXWlwz99Ac5tPvXGxWPWs3lXTQ2dDNuCKcpjJmPV8cs_QR5ngWYpJP-lCkswO0Tni2LFeie48h7AEAXBHzHclSB48i0wyl0sbp8OozeWkl_00YhdxQW_F0tgMvcMvCbz0mxPQnYVy-z0uEunYn-fS1pXZQNZ0tPCFj00FxA0wtix4qZXsUpBG1ciSgiG6437S-k-sYREdoFp2bnOzjGRO3kqm6e1wuVu_nWpRuTx72Ybw0Bao8tMV_GCBKcidjiaoIntOicdrdfAsJOuzIX14QpwveRcSM1E6vR0vqmmvsgT4XGfxsmDq0DRxNcOIwV4Rt1Mjf5USnSiCfPLIwFGlNewpbapucsYRDNV1TFevKlasK6zYB75HaqJawCqalpPwcgmeUVlvcOd__X__EQ8WIIwrJPeSqMNWU7yOqJLEbkCiT4Ko4oZ9gUi6zMS-QKDNqMe20LCe1JrgvQ3RgAA2DjzColYRBtDFUoni2xI6XsR-46iObd1gvtjol0k5r4vhkF9TdpvyXFZwsoRz4GIYWQdtyVlyR6nCj5uDQsFC6pIKzhvGbCx1dt6xNU9Hsg81im92FlsSwtly4W6qM9jf3Yh2qe6Ks3cOh6SsF_s3IDC3S1I9Rw=w1240-h926-no"
          >Krypto mining. Til sammen hadde vi 40 skjermkort. masse spenning og
          moro. Veldig lærerikt.</CvProjects
        >
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="API KURS"
          imageUrl="https://www.drupal.org/files/project-images/rain-drop-hi.png"
        >
          <p>
            Enkelt og koselig kurs som handlet om å hjelpe andre med å lære om
            apier. Det var 10 stykker, og det var et internt kurs hvor jeg lærte
            opp andre ansatte.
          </p>
        </CvProjects>
      </v-col>

      <v-col :md="12" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
        <CvProjects
        class="pa-1"
          title="Saksofon instruktør"
          imageUrl="https://cdn.shopify.com/s/files/1/1151/9830/products/as-400_20dg-02_1800x1800.jpg?v=1623183737"
        >
          <p>Veldig gøy :D</p>
        </CvProjects>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: "cv",

  async asyncData({ $content, params }) {
    return {
      pages: await $content("_projects").fetch(),
    };
  },
};
</script>

<style>
</style>