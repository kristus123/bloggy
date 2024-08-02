<template>
    <p class="mb-2 grey--text font-weight-thin">
        {{label}} - <strong>{{month}} {{year}}</strong>
    </p>
</template>

<script>
export default {
    props: ["label", "date"],
    
    computed: {
        month() {
            return new Date(this.date).toLocaleString("default", {month: "long"})
        },
        year() {
            return new Date(this.date).getFullYear()
        }
    }
}
</script>

<style>

</style>