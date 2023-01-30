<script>
import { navElement } from '../data/index'
import AppLogo from './production/AppLogo.vue';
import BaseSearch from './production/BaseSearch.vue';
import { store } from '../data/store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            navElement
        }
    },
    components: { BaseSearch, AppLogo },
    emits: ['research', 'send-research']
}
</script>

<template>
    <header class="bg-dark">
        <div class="container-fluid h-100">
            <div class="row align-items-center h-100">
                <div class="col-2 w-auto">
                    <a href="#" class="text-decoration-none">
                        <app-logo textLogo="BOOLFLIX"></app-logo>
                    </a>
                </div>
                <div class="col-7 px-0">
                    <ul class="d-flex align-items-center p-0 m-0">
                        <li v-for="i in navElement" class="mx-2">
                            <a href="#" class="text-white text-decoration-none">
                                <p class="mb-0">{{ i }}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-1 d-flex justify-content-end">
                    <base-search @change-term="$emit('research', $event)" @form-submit="$emit('send-research')"
                        placeholder="cerca un film..."></base-search>
                </div>
                <div v-if="store.firstName" class="col-1 profile d-flex align-items-center">
                    <img src="../assets/img/user.png" :alt="store.firstName">
                    <p class="text-white mb-0 mx-3 fs-5">{{ store.firstName }}</p>
                    <select name="manu" id="manu">
                        <option value="Gestiscione">Gestisci i profili</option>
                        <option value="Trasferimento">Trasferisci profilo</option>
                        <option value="Account">Account</option>
                        <option value="Assistenza">Centro Assistenza</option>
                    </select>
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

    select {
        font-size: 15px;
        width: 70px;
        border: 0;
        background-color: transparent;
        color: #fff;

        option {
            background-color: black;
        }
    }

    .profile {
        img {
            height: 35px;
            width: 35px;
            border-radius: 50%;
        }

        select {
            width: 20px;
            background-color: transparent;
            color: #fff;
        }
    }

    ul {
        list-style-type: none;

        p {
            text-shadow: 0px 2px 1px rgb(0, 0, 0);
            font-size: 14px;
        }

    }

    li:hover p {
        text-shadow: 0px 0px 1px rgb(255, 255, 255);
    }
}
</style>
