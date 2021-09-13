<template>
<div>
    <v-card>
        <h1>{{title}}</h1>
    <slot />
    <v-img :src="imageUrl" />
    </v-card>
</div>
  
</template>

<script>
export default {
    props: ['title', 'imageUrl']

}
</script>

<style>

</style>