<script>
import { store } from '../data/store'
import ProductionCard from '../components/production/ProductionCard.vue';
export default {
    name: 'AppMain',
    data() { return { store } },
    components: { ProductionCard },
}
</script>


<template>
    <main>
        <section id="movies" class="container-fluid">
            <div class="row py-5">
                <h2>FILM</h2>
                <production-card v-for="m in store.movies" :key="m.id" :item="m"></production-card>
            </div>
            <div class="row">
                <h2>SERIE TV</h2>
                <production-card v-for="s in store.series" :key="s.id" :item="s"></production-card>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
main {
    height: 100%;
    background-color: #2d2d2f;

    .row {
        flex-wrap: wrap;
        color: rgb(179, 3, 3);
    }
}
</style>