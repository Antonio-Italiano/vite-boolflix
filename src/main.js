import { createApp } from 'vue'
import App from './App.vue'
// IMPORT BOOTSTRAP 
import 'bootstrap/dist/css/bootstrap.min.css';
// IMPORT FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, farStar, faMagnifyingGlass);

const app = createApp(App)
// GLOBAL COMPONENTS 
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
