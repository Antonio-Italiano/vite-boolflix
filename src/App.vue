<script>
import axios from 'axios';
import { config } from './data/index'
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  data() { return { config, store, query: '', } },
  components: { AppHeader, AppMain },
  computed: {
    axiosConfig() {
      const { language } = config;
      return { params: { language: language, query: this.query } }
    }
  },
  methods: {
    // REFRESH YOUR SEARCH FOR EACH ENTERED LETTER
    nameFilm(param) { this.query = param; },

    // SUBMIT SEARCH
    sendUrl() {
      this.researchApiUri(this.config.apiUriMovie, 'movies');
      this.researchApiUri(this.config.apiUriTv, 'series');
    },

    // SUBMIT YOUR SEARCH WITH CREATED URL
    researchApiUri(apiUri, collection) {
      axios.get(`${config.baseUri}${apiUri}${config.key}`, this.axiosConfig)
        .then(res => {
          console.log(`${config.baseUri}${apiUri}${config.key}`, this.axiosConfig)
          store[collection] = res.data.results || res.data.genres;
        }).catch(err => { console.error(err) }).then(() => { })
    }
  },
  created() {
    this.researchApiUri(this.config.apiUriMovieGenre, 'moviesGenre');
    this.researchApiUri(this.config.apiUriTvGenre, 'seriesGenre');
  }
}
</script>

<template>

  <app-header @research="nameFilm" @send-research="sendUrl"></app-header>
  <app-main></app-main>

</template>

<style lang="scss">
.container-fluid {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
