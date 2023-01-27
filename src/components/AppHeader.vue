<script>
import { navElement } from '../data/index'
import AppLogo from './production/AppLogo.vue';
import BaseSearch from './BaseSearch.vue';
export default {
    name: 'AppHeader',
    data() {
        return {
            navElement
        }
    },
    components: { BaseSearch, AppLogo },
    emits: ['research', 'send-research']
}
console.log(navElement); 
</script>

<template>
    <header class="bg-dark">
        <div class="container-fluid h-100">
            <div class="row align-items-center h-100">
                <div class="col-2">
                    <app-logo textLogo="BOOLFLIX"></app-logo>
                </div>
                <div class="col-7">
                    <ul class="d-flex align-items-center m-0">
                        <li v-for="i in navElement" class="mx-3">
                            <a href="#" class="text-white text-decoration-none">
                                <p class="mb-0">{{ i }}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 text-end">
                    <base-search @change-term="$emit('research', $event)" @form-submit="$emit('send-research')"
                        placeholder="cerca un film..."></base-search>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 70px;
    width: 100vw;
    position: fixed;
    z-index: 2;
    box-shadow: 0px 0px 5px rgb(0, 0, 0);

    ul {
        list-style-type: none;
    }

}
</style>
