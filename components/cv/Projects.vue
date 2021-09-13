<template>
<div>
    <v-card class="pa-16">
        <v-img :src="imageUrl" />

        <p>{{title}}</p>
        <slot />
    </v-card>
</div>
  
</template>

<script>
export default {
    props: ["title",
            "description",
            "imageUrl",
            "technologyUsed",
            "amountOfMonths",
            "yearFromTo",]

}
</script>

<style>

</style>