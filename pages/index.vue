<template>
  <div>
    <center class="mt-12">
      <h1>welcome</h1>
      <p>My name is Kristian. I am pretty gay</p>
    </center>
    
    <div class="center-screen">
      <v-row  align="center" justify="center" class="pa-0 ma-0">
        <v-col cols="3" class="pa-0 ma-0">
          <v-btn text x-large color="blue darken-2" dark to="/blogs">Read my words</v-btn>
          <p class="grey--text">also called blog posts</p>
        </v-col>
        <v-col cols="3" class="pa-0 ma-0">
          <v-btn text x-large color="orange darken-2" dark href="http://kristian-cv.netlify.app/">Check out my other page</v-btn>
          <p class="grey--text">A fun and easy page</p>
        </v-col>
      </v-row>
    </div>

    <center>
      <p class="grey--text"><span style="color:red;">Gmail</span> sjekker jeg regelmessig 1-2 ganger for dagen</p>
      <h2><v-icon color="red" large class="mr-4">mdi-email-outline</v-icon>krispetter@gmail.com</h2>
      
      <p class="grey--text mt-12"><span style="color:#5865F2;">Discord</span> bruker jeg mye i helgene</p>
      <h2><v-icon color="#5865F2" large class="mr-4">mdi-discord</v-icon>Kristian ✓ᵛᵉʳᶦᶠᶦᵉᵈ#8297</h2>
    </center>

    
  </div>
</template>




<style scoped>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 50vh;
}
</style>