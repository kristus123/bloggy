```html
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
```


```html
<v-row align="center" justify="center">
      <v-col
        xs="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        v-for="page in pages"
        v-bind:key="page.title"
        class="mb-12 mt-12"
      >
        <slot :page="page" />
      </v-col>
    </v-row>
```