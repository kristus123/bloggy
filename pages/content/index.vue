<template>
  <center>
    <div>
      <TextTitle title="Various articles" />

      <MyCols :pages="categories" v-slot="{ page }">
        <v-card
          :color="page.color"
          :class="`highligt-on-hover ${page.class}`"
          max-width="400"
        >
          <div class="pa-4">
            <h2>{{ page.title }}</h2>
            <p class="mt-4">{{ page.description }}</p>
          </div>
          <center class="pa-4">
            <nuxt-link :to="page.path">
              <v-btn block outlined dark color="white">Read More!</v-btn>
            </nuxt-link>
          </center>
        </v-card>
      </MyCols>
    </div>

    <SubscribeJoin />
  </center>
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
.highligt-on-hover {
  position: relative;
  top: 0;
  transition: top ease 0.2s;
  -webkit-transition: all 0.1s ease-in;
}
.highligt-on-hover:hover {
  top: -10px;
}
</style>