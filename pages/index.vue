<template>
  <div>
    <center class="mt-4">
      <h1 class="mb-4">My name is Kristian</h1>
      <p class="mb-4">I own a <strong>plant</strong> <v-icon color="green" class="ml-0">mdi-flower</v-icon></p>
    </center>
      <center class="mb-12 mt-12">
        <v-btn text x-large color="blue darken-2" dark to="/content"
            >Read my words</v-btn
          >
          <p class="grey--text">also called <strong>blog posts</strong></p>
      </center>

      <SearchArticle :folder="null" />

  </div>
</template>