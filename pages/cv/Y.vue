<template>
  <div>
    <center>
      <h1 class="animated fadeIn mb-12 white--text">Hvor har jeg jobbet?</h1>
    </center>
    <center class="pt-8">
      <div style="max-width:80%;">
        <TimelineComponent title="DNB" year="2019-nå" description="Software engineer" class="mb-8" />
        <TimelineComponent title="Experis" year="2019-nå" description="Konsulent" class="mb-8" />
        <TimelineComponent
          title="Askøy kommune"
          year="2017-2019"
          description="IKT-lærling"
          class="mb-8"
        />

        <TimelineComponent
          title="Bergen Katedralskole"
          year="2017-2018"
          description="praksis"
          referencePhoneNumber="N/A"
          referenceEmail="N/A"

          class="mb-8"
        >
          I tiden hos oss arbeidet Kristian med python-programmering i gui, egne verktøy og arbeidet
          flittig med brukerstøtte og Windows deployment service / Microsoft deployment tools.
          <br>
          Kristian kan beskrives som en dyktig elev og lys våken selv på en tirsdags morgen.
          Vi gir Kristian våre anbefalinger og ønsker lykke til videre.
        </TimelineComponent>

        <TimelineComponent
          title="Amalie skram VGS"
          year="2017-2018"
          description="skolegang"
          class="mb-8"
        />
      </div>
    </center>
  </div>
</template>

<script>
import TimelineComponent from "@/components/TimelineComponent";
export default {
  props: ["skills"],
  components: { TimelineComponent }
};
</script>

<style>
</style>