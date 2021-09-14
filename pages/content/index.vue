<template>
  <div>
    <center>
      <div>
        <TextTitle title="Various articles" />

      <v-row align="center" justify="center" class="ma-0 pa-0">
        <v-col
        class="ma-12"
          xs="12"
          sm="12"
          md="6 "
          lg="4"
          xl="4"
          v-for="category in categories"
          v-bind:key="category"
        >
          <v-card :color="category.color" :class="`motion ${category.class}`" max-width="400">
            <div class="pa-4">
              <h2>{{ category.title }}</h2>
              <p class="mt-4">{{ category.description }}</p>
            </div>
            <center class="pa-4">
              <nuxt-link :to="category.path">
<v-btn block outlined dark  color="white"
                >Read More!</v-btn
              >
              </nuxt-link>
              
            </center>
          </v-card>
        </v-col>
      </v-row>
      </div>
    </center>
  </div>
</template>

<script>
export default {

  data() {
    return {
      categories: [
        {
          title: "All posts",
          description: "All combined in a big mush",
          path: "/content/all",
          color: "light-green darken-3",
          class: "white--text", 
        },
        {
          title: "Blog",
          description: "Here I write about different topics",
          path: "/content/blogs",
          color: "red",
          class: "white--text", 
        },
        {
          title: "Java",
          description: "Here I write about Java",
          path: "/content/java",
          color: "brown lighten-1",
          class: "white--text", 
        },
        {
          title: "Kotlin",
          description: "Here I write about Kotlin",
          path: "/content/kotlin",
          color: "blue darken-1",
          class: "white--text", 
        },
      ],
    };
  },
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
  background-color: rgba(255, 202, 26, 0.2);
}
</style>