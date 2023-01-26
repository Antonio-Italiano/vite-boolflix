<script>
export default {
    name: 'BaseSearch',
    data() {
        return {

            term: '',
        }
    },
    props: {
        placeholder: String
    },
    emits: ['change-term', 'form-submit']
}
</script>

<template>
    <form class="" @submit.prevent="$emit('form-submit')">
        <input v-model.trim="term" type="text" :placeholder="placeholder || 'cerca'"
            @keyup="$emit('change-term', term)">
        <button class="btn btn-primary">invia</button>
    </form>
</template>

<style>

</style>
