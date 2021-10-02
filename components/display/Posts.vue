<template>
  <center>
    <MyCols
      xs="12"
      sm="12"
      md="6 "
      lg="4"
      xl="4"
      :pages="articles"
      v-slot="{ page }"
    >
      <v-card class="motion" max-width="400">
        <v-img
          height="10"
          :src="`${page.coverImage}`"
          class="pa-9 align-end"
          min-height="300"
        />

        <div class="pa-4">
          <h2>{{ page.title }}</h2>
          <p class="mt-4">{{ page.description }}</p>
          <div class="mt-5 mb-4"></div>
        </div>
        <center class="pa-4">
          <nuxtLink :to="`/content/${page.pathPrefix}/${page.slug}`">
            <v-btn block dark color="blue darken-1">{{
              page.readButton
            }}</v-btn>
          </nuxtLink>
        </center>
      </v-card>
    </MyCols>
  </center>
</template>

<script>
export default {
  props: ["articles"],
};
</script>

<style scoped>
.motion {
  position: relative;
  top: 0;
  transition: top ease 0.2s;
  -webkit-transition: all 0.1s ease-in;
}
.motion:hover {
  top: -10px;
  background-color: rgb(246, 196, 102);
}
</style>