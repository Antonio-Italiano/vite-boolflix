<script>
export default {
    name: 'AppLogo',
    props: {
        textLogo: String,
    }

}
</script>

<template>
    <h2 class="logo">{{ textLogo }}</h2>
</template>

<style lang="scss">
.logo {
    text-shadow: -3px -2px 2px rgb(0, 0, 0);
    color: rgb(255, 0, 0);
}
</style>