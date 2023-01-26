<script>
import BaseSearch from './BaseSearch.vue';
export default {
    name: 'AppHeader',
    data() {
        return {
        }
    },
    components: { BaseSearch },
    emits: ['research', 'send-research']
}
</script>

<template>
    <header>
        <base-search @change-term="$emit('research', $event)" @form-submit="$emit('send-research')"
            placeholder="cerca un film..."></base-search>
    </header>
</template>

<style>

</style>
