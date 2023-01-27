import { createApp } from 'vue'
import App from './App.vue'
// IMPORT BOOTSTRAP 
import 'bootstrap/dist/css/bootstrap.min.css';
// IMPORT FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHatWizard, faMagnifyingGlass);

const app = createApp(App)
// GLOBAL COMPONENTS 
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
