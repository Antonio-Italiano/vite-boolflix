<script>
import { store } from '../data/store'
import ProductionCard from '../components/production/ProductionCard.vue';
export default {
    name: 'AppMain',
    data() { return { store, name: '' } },
    components: { ProductionCard },
    methods: {
        assignName() {
            this.store.firstName = this.name;
            this.name = '';
        }
    }
}
</script>


<template>
    <main>
        <section id="movies">
            <!-- MAIN SCREEN -->
            <div v-if="!store.movies.length && !this.store.firstName"
                class="intro text-white d-flex justify-content-center align-items-center ">
                <h1>Benvenuto su Boolflix </h1>
                <input v-model.trim="name" class="name ms-3" type="text" placeholder="Inserisci il tuo nome"
                    @keyup.enter="assignName">
            </div>
            <!-- LOGHIN -->
            <div v-if="!store.movies.length && !store.series.length && this.store.firstName"
                class="intro text-white d-flex flex-column justify-content-center align-items-center ">
                <h1>Ciao {{ store.firstName }}</h1>
                <h3 class="mt-5">Su Boolflix puoi cercare i Film e Serie Tv che più ti appassionano.</h3>
                <h3>Effettua la ricerca inserendo il nome del Film o Serie Tv in alto a destra</h3>
            </div>
            <!-- MOVIES SCREEN -->
            <div v-if="store.movies.length" class="row py-5 container-fluid">
                <div class="d-flex">
                    <h2>FILM</h2>
                    <select v-if="store.asClicked || store.movies.length" name="manu" id="manu" class="me-2">
                        <option value="">Generi </option>
                        <option v-for="m in store.moviesGenre" :value="m.name">{{ m.name }}</option>
                    </select>
                </div>
                <production-card v-for="m in store.movies" :key="m.id" :item="m"></production-card>
            </div>
            <!-- SERIES SCREEN -->
            <div v-if="store.series.length" class="row py-5 container-fluid">
                <div class="d-flex">
                    <h2>Serie TV</h2>
                    <select v-if="store.asClicked || store.movies.length" name="manu" id="manu" class="me-2">
                        <option value="">Generi </option>
                        <option v-for="m in store.seriesGenre" :value="m.name">{{ m.name }}</option>
                    </select>
                </div>
                <production-card v-for="s in store.series" :key="s.id" :item="s"></production-card>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: 100vh;
    background-color: #2d2d2f;
    padding-top: 70px;

    select {
        width: 100px;
        margin-left: 10px;
        font-size: 14px;
        border: 0;
        background-color: transparent;
        color: #fff;
        text-align: center;

        option {
            background-color: black;
            font-size: 12px;
            width: 300px;
        }
    }

    .intro {
        height: calc(100vh - 70px);
        width: 100vw;
        background-image: url(../assets/img/bachground.webp);
        background-size: cover;
        background-blend-mode: saturation;

        h1,
        h3 {
            text-shadow: 3px 3px 4px #000000;
        }

        input {
            height: 40px;
            width: 200px;
            background-color: rgba(92, 87, 87, 0.453);
            border-radius: 10px;
            border: 1px solid black;
            text-align: center;
            color: white;
        }

        ::placeholder {
            color: white;
            text-align: center;
        }

    }

    .row {
        color: rgb(255, 2, 2);
        text-shadow: 1px 1px 2px black;
        margin: 0 auto;
    }
}
</style>