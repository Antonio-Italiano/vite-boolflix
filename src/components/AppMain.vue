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
            <div v-if="store.movies.length" class="row py-5">
                <h2>FILM</h2>
                <production-card v-for="m in store.movies" :key="m.id" :item="m"></production-card>
            </div>
            <div v-if="store.series.length" class="row">
                <h2>SERIE TV</h2>
                <production-card v-for="s in store.series" :key="s.id" :item="s"></production-card>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
main {
    min-height: 100vh;
    background-color: #2d2d2f;
    padding: 70px 0;

    .row {
        color: rgb(255, 2, 2);
        text-shadow: 1px 1px 2px black;
    }
}
</style>