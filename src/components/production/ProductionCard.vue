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
            const flags = ['it', 'en'];
            return flags.includes(this.item.language);
        },
        flagSrc() {
            const url = new URL(`../../assets/img/flags/${this.item.language}.png`, import.meta.url);
            return url.href;
        },
        convertVote() {
            return this.item.vote / 2;
        }
    }
}
</script>

<template>
    <div v-if="item.poster" class="col p-0">
        <a href="#">
            <figure>
                <img :src="'https://image.tmdb.org/t/p/w342/' + item.poster" :alt="item.title">
            </figure>
            <div class="info text-center">
                <h1 class="title ">{{ item.title }}</h1>
                <h2 class="title-or">({{ item.originalTitle }})</h2>
                <figure>
                    <img v-if="hasFlag" :src="flagSrc" :alt="item.language">
                    <p v-else>{{ item.language }}</p>
                </figure>
                <p class="vote">{{ convertVote }}</p>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.col {
    position: relative;
    height: 200px;
    min-width: calc(15.5%);
    max-width: calc(15%);
    margin: 5px;
    box-shadow: 0px 0px 200px rgba(74, 48, 99, 0.559);
    transition: 0.3s;

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
        padding: 15px;
        opacity: 0;
        color: #fff;
        transition: 1s;
        border-radius: 8px;


        .title {
            height: 30%;
            font-size: 15px;
        }

        .title-or {
            height: 20%;
            font-size: 12px;

        }


        figure {
            height: auto;
            display: flex;
            justify-content: center;

            img {
                width: 35px;
                height: 25px;
                opacity: 0;
                border-radius: 6px;
                transition: 1s;

            }

        }
    }

}

.col:hover {
    position: relative;
    z-index: 1;
    scale: 1.15;
}

.col:hover .info {
    display: block;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.65);
}

.col:hover .info img {
    opacity: 1;
}
</style>