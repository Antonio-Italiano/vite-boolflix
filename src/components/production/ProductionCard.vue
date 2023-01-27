<script>
export default {
    name: 'ProductionCard',
    data() { return {} },
    components: {},
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.item.language);
        },
        flagSrc() {
            const url = new URL(`../../assets/img/flags/${this.item.language}.png`, import.meta.url);
            return url.href;
        }
    }
}
</script>

<template>
    <div class="col">
        <h1>{{ item.title }}</h1>
        <h2>{{ item.originalTitle }}</h2>
        <img v-if="hasFlag" :src="flagSrc" :alt="item.language">
        <h4 v-else>{{ item.language }}</h4>
        <h6>{{ item.vote }}</h6>
        <img :src="'https://image.tmdb.org/t/p/w342/' + item.poster" :alt="item.title">
    </div>
</template>

<style lang="scss" scoped>

</style>