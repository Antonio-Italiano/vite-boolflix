<script>
import { store } from '../../data/store'
export default {
    name: 'BaseSearch',
    data() {
        return { term: '', store }
    },
    props: { placeholder: String },
    emits: ['change-term', 'form-submit'],
    methods: {
        changeParam() {
            this.store.asClicked = !this.store.asClicked;
            this.term = '';
        }
    }
}
</script>

<template>
    <!-- ICON SEARCH  -->
    <div v-if="!store.asClicked" class="search" @click="changeParam">
        <font-awesome-icon class="text-white cursore" icon="fa-solid fa-magnifying-glass" />
    </div>
    <!-- INPUT  -->
    <form v-if="store.asClicked" class="" @submit.prevent="$emit('form-submit')">
        <input v-model.trim="term" type="text" :placeholder="placeholder || 'cerca'" @keyup="$emit('change-term', term)"
            @keyup.enter="changeParam" @keyup.esc="changeParam">
    </form>
</template>

<style lang="scss" scoped>
.search {
    width: 20px;

    .cursore {
        cursor: pointer;
    }

    &.search:hover .cursore {
        scale: 1.2;
        text-shadow: 0px 0px 1px rgb(255, 255, 255);
    }
}
</style>
