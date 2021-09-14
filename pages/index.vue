<template>
  <div>

    <center class="mt-4">
      <TextTitle title="My name is Kristian" />

      <p class="mb-4">I have a <strong>plant</strong> <v-icon color="green" class="ml-0">mdi-flower</v-icon></p>
    </center>
    <div>
<v-row align="center"
      justify="center" co>
      <v-col sm="12" md="6" lg="6" xl="3"  cols="6" v-for="page in pages" v-bind:key="page.title" class="mb-12 mt-12">
        <center>
          <nuxt-link :to="page.to">
              <v-btn text x-large color="blue darken-2" dark
            >{{page.title}}</v-btn
          >
          </nuxt-link>
                 
          <p class="grey--text">{{page.description}}</p> 
      </center>
      </v-col>
    </v-row>
    </div>
    
      
<center class="mt-16">
      <v-icon size="50" color="red darken-2">mdi-yin-yang</v-icon >
      <p class="grey--text">Thank you for visiting my site</p>
</center>

<center class="ma-16">
  <hr style="max-width:50%" >
</center>

<SubscribeJoin />

  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {title: 'Read my words', description: 'also called blog posts', to: '/content'},
        {title: 'my projects', description: 'Fancy things', to: '/cv/projects'},
        {title: 'Where have i worked?', description: 'and what did i do there', to: '/cv/jobs'},
        {title: 'Certificates', description: 'Indeed I have nerded hard', to: '/cv/certificates'},
      ]
    }
  }
}
</script>
