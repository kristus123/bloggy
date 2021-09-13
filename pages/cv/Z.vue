<template>
  <div>
    <center>
      <h1 class="white--text">sertifiaker og kurs</h1>
    </center>
    <center>
      <v-row>

        <v-col cols="4">
          <MoreDetails
            title="Det viktigste av alt"
            imageUrl="https://i.gyazo.com/052b88565ff49685dffe182bc0254ead.jpg"
          >
          <h1>Min interesse</h1>
          <p class="mt-4">Det viktigste er interessen man har for å oppnå det man ønsker</p>

          <p class="mt-8">
            Jeg føler meg svært heldig for å ha muligheten til å kunne jobbe med noe jeg liker <strong>ekstremt</strong> godt å jobbe med
          </p>

          <p class="mt-8">
            I tillegg til at jeg ønsker å gjøre en god jobb, og jeg har som mål å bli en "software engineer" i <strong>verdensklasse</strong>
          </p>

          </MoreDetails>
        </v-col>

        <v-col cols="4">
          <MoreDetails
            title="Fagbrev i IKT-servicefag"
            imageUrl="https://i.gyazo.com/63b097e876d66f3901b0eadc0d2f23c7.png"
          >
          </MoreDetails>
        </v-col>

        <v-col cols="4">
          <MoreDetails
            title="JAVA OCA"
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png"
          />
        </v-col>
        <v-col cols="4">
          <MoreDetails
            title="JAVA OCP"
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png"
          />
        </v-col>
        <v-col cols="4">
          <MoreDetails
            title="Experis Academy"
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png"
          >
            <p>Akselerert læringsprogram i 3 mnd med mål om å bli Fullstack Javautvikler med spesialisering i frontend.</p>

            <p>Kurs for å håndtere enkeltpersonforetak</p>

            <p>skriv litt her. Jeff the man</p>
          </MoreDetails>
        </v-col>

        <v-col cols="4">
          <MoreDetails
            title="Enkeltpersonforetak kurs"
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png"
          >
            <p>Kurs for å håndtere enkeltpersonforetak</p>
          </MoreDetails>
        </v-col>

        <v-col cols="4">
          <MoreDetails
            title="API KURS"
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png"
          ></MoreDetails>
        </v-col>
      </v-row>
    </center>
  </div>
</template>

<script>
import MoreDetails from "@/components/MoreDetails";
export default {
  components: { MoreDetails }
};
</script>

<style>
</style>