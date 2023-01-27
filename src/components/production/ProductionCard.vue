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
    <div class="col card">
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
    </div>
</template>

<style lang="scss" scoped>
.card {
    position: relative;
    height: 200px;
    min-width: calc(16%);
    max-width: calc(16%);
    padding: 5px;
    border-radius: 20px;
    transition: 0.3s;

    figure {
        height: 100%;
        width: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .info {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        padding: 15px;
        color: white;
        display: none;
        transition: 3s;


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
                width: 30px;
                height: 20px;
            }

        }
    }

}

.col:hover {
    position: relative;
    z-index: 1;
    scale: 1.05;
}

.col:hover .info {
    display: block;
    background-color: rgba(0, 0, 0, 0.8);
}
</style>