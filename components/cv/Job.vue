<template>
         <div>
             {{title}}
        <slot />

        <div></div>
         </div>
</template>

<script>
export default {
    props: ['title', 'year', 'description']

}
</script>

<style>

</style>