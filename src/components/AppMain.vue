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
        <div>
            <h1 class="text-danger">FILM</h1>
            <production-card v-for="m in store.movies" :key="m.id" :item="m"></production-card>
        </div>
        <div>
            <h1 class="text-danger">SERIE</h1>
            <production-card v-for="s in store.series" :key="s.id" :item="s"></production-card>
        </div>
    </main>
</template>
<style lang="scss" scoped>

</style>