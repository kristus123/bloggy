<template>
  <div>
      <TextTitle title="Goals I want to reach for" />
      <MyCols :pages="pages" :all="12" v-slot="{ page }">
          <v-card class="pa-8">
          <center>
              <h2 class="mb-6">{{page.title}}</h2>
              <p>{{page.notes}}</p>
          </center>
      </v-card>
      </MyCols>
  </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {title: "Run once a week", notes:"Going good"},
            ]
        }
    }

}
</script>

<style>

</style>