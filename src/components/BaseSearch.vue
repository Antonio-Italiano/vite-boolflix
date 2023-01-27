<script>
export default {
    name: 'BaseSearch',
    data() {
        return {
            term: '',
            asClicked: false,
        }
    },
    props: {
        placeholder: String
    },
    emits: ['change-term', 'form-submit'],
    methods: {
        changeParam() {
            this.asClicked = !this.asClicked;
            this.term = '';
        }
    }
}
</script>

<template>
    <div v-if="!asClicked" class="search" @click="changeParam">
        <font-awesome-icon class="text-white cursore" icon="fa-solid fa-magnifying-glass" />
    </div>

    <form v-if="asClicked" class="" @submit.prevent="$emit('form-submit')">
        <input v-model.trim="term" type="text" :placeholder="placeholder || 'cerca'" @keyup="$emit('change-term', term)"
            @keyup.enter="changeParam">
    </form>
</template>

<style lang="scss" scoped>
.search {
    cursor: pointer;
}
</style>
