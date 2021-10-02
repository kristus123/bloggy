<template>
  <div>
    <center class="mt-4">
      <TextTitle title="My name is Kristian" />

      <p class="mb-4">
        I have a <strong>plant</strong>
        <v-icon color="green" class="ml-0">mdi-flower</v-icon>
      </p>
    </center>
    <MyCols :pages="pages" v-slot="{ page }">
      <center>
        <nuxt-link :to="page.to">
          <v-btn text x-large color="blue darken-2" dark>{{
            page.title
          }}</v-btn>
        </nuxt-link>

        <p class="grey--text">{{ page.description }}</p>
      </center>
    </MyCols>

    <SubscribeJoin />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: "Read my words",
          description: "also called blog posts",
          to: "/content",
        },
        {
          title: "CV",
          description: "also known as what recruiters wants",
          to: "/cv",
        },
      ],
    };
  },
};
</script>
