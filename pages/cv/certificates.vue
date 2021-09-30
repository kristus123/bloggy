<template>
  <div>
    <center>
      <h1 class="white--text">Sertifikater og kurs</h1>
    </center>
    <center>
      <v-row>

        <v-col class="px-16" :md="6" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
          <CvEffort
            title="studering på fritid"
            imageUrl="https://i.gyazo.com/052b88565ff49685dffe182bc0254ead.jpg"
          >
          </CvEffort>
        </v-col>

        <v-col class="px-16" :md="6" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
          <CvEffort
            title="Fagbrev i IKT-servicefag"
            imageUrl="https://i.gyazo.com/63b097e876d66f3901b0eadc0d2f23c7.png"
          >
          </CvEffort>
        </v-col>

        <v-col class="px-16" :md="6" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
          <CvEffort
            title="JAVA OCA"
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png"
          />
        </v-col>
        <v-col class="px-16" :md="6" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
          <CvEffort
            title="JAVA OCP"
            imageUrl="https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png"
          />
        </v-col>
        <v-col class="px-16" :md="6" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
          <CvEffort
            title="Experis Academy"
            imageUrl="https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.6435-9/210750258_4183074198397603_7705926807250553719_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=OH1xkgxXlP0AX_zggy9&_nc_ht=scontent.fsvg2-1.fna&oh=8ca903e464cdeaa88cc5615bf09af90c&oe=616C4307"
          >
            <p>Akselerert læringsprogram i 3 mnd i Oslo</p>

          </CvEffort>
        </v-col>

        <v-col class="px-16" :md="6" :xs="12" :sm="12" :xl="6" :lg="6" :cols="12">
          <CvEffort
            title="kurs i å drive enkeltpersonforetak"
            imageUrl="https://www.onemed.no/-/media/onemed/b2b/no/images/bergen-byvaapen.jpg?h=353&w=353&la=nb-NO&hash=E88F2993BC1F4D5C564DC58BC26282D6FF409179"
          >
          </CvEffort>
        </v-col>
      </v-row>
    </center>
  </div>
</template>

<style>
</style>


<script>
export default {
  layout: "cv"
}
</script>