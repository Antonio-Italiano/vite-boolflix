<script>
export default {
    name: 'ProductionCard',
    data() {
        return {
        }
    },
    components: {},
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            const flags = ['al', 'ca', 'cn', 'de', 'en', 'es', 'fr', 'hi', 'it', 'ja', 'mx', 'tr', 'us'];
            return flags.includes(this.item.language);
        },
        flagSrc() {
            const url = new URL(`../../assets/img/flags/${this.item.language}.png`, import.meta.url);
            return url.href;
        },
        fullStar() {
            return this.item.vote = Math.ceil(this.item.vote / 2);
        },
        hollowStar() {
            return 5 - this.item.vote;
        }
    }
}
</script>

<template>
    <div v-if="item.poster" class="col p-0 my-3 mx-19">
        <a href="#">
            <figure>
                <img :src="'https://image.tmdb.org/t/p/w342/' + item.poster" :alt="item.title">
            </figure>
            <div class="info text-center p-2">
                <h1 class="title mb-1">{{ item.title }}</h1>
                <h2 class="title-or m-0">({{ item.originalTitle }})</h2>
                <figure>
                    <img v-if="hasFlag" :src="flagSrc" :alt="item.language">
                    <p v-else>{{ item.language }}</p>
                </figure>
                <div class="vote m-0">
                    <font-awesome-icon icon="fa-solid fa-star" v-for="i in fullStar" :key="i" class="text-warning" />
                    <font-awesome-icon icon="fa-solid fa-star" v-for="i in hollowStar" :key="i" class="" />
                </div>
                <p class="trama">{{ item.overview }}</p>
                <p class="trama">{{ item.first_air_date }}</p>
                <p class="trama">RILASCIATO: {{ item.release_date }}</p>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.col {
    position: relative;
    height: 200px;
    min-width: calc(100% / 8 - 10px);
    max-width: calc(100% / 8 - 10px);
    margin: 5px;
    box-shadow: 0px 0px 200px rgba(112, 51, 125, 0.478);
    transition: 0.2s;

    figure {
        height: 100%;
        width: 100%;


        img {
            width: 100%;
            height: 100%;
            display: block;
            filter: contrast(1.1);
            border-radius: 8px;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);

        }
    }

    .info {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        color: #fff;
        transition: 1s;
        border-radius: 8px;
        overflow-y: auto;




        .title {
            font-size: 11px;
        }

        .title-or {
            height: 20%;
            font-size: 8px;

        }

        .vote {
            font-size: 10px;
        }

        .trama {
            font-size: 7px;
            line-height: 7px;
        }


        figure {
            height: auto;
            margin-bottom: 0;
            display: flex;
            justify-content: center;

            img {
                width: 18px;
                height: 13px;
                opacity: 0;
                border-radius: 4px;
                transition: 1s;

            }

        }
    }

}

.col:hover {
    height: 150px;
    position: relative;
    z-index: 1;
    scale: 1.8;
}

.col:hover .info {
    display: block;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.65);
}

.col:hover .info img {
    opacity: 1;
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background-color: rgb(64, 64, 64);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-block: 3px;
}

::-webkit-scrollbar-thumb {
    background-color: rgb(173, 170, 170);
    border-radius: 100vw;
    margin-block: 1px;

}

::-webkit-scrollbar-thumb:hover {
    background-color: rgb(138, 138, 138);
}
</style>