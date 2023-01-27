<script>
import axios from 'axios';
import { config } from './data/index'
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  data() {
    return {
      config,
      store,
      query: '',
      movieUrlGenerated: '',
      seriesUrlGenerated: '',
    }
  },
  components: { AppHeader, AppMain },
  methods: {

    // SUBMIT YOUR SEARCH WITH CREATED URL
    researchApiUri(apiUri) {
      axios.get(apiUri).then(res => {

        // CONTINUE IF THE URL IS OF THE MOVIE
        if (apiUri === this.movieUrlGenerated) {
          // MOUNTED ARRAY MOVIES IN STORE
          const movies = res.data.results;
          // NEW ARREY WITH KEYS REQUIRED
          store.movies = movies.map(movie => {
            const { original_title, title, original_language, vote_average, poster_path } = movie;
            // CHANGE KEY NAME
            return { originalTitle: original_title, title, language: original_language, vote: vote_average, poster: poster_path };
          });

          // CONTINUE IF THE URL IS OF THE SERIE TV
        } else if (apiUri === this.seriesUrlGenerated) {
          // MOUNTED ARRAY TVSERIES IN STORE
          const series = res.data.results;
          // NEW ARREY WITH KEYS REQUIRED
          store.series = series.map(tv => {
            const { original_name, name, original_language, vote_average, poster_path } = tv;
            // CHANGE KEY NAME
            return { originalTitle: original_name, title: name, language: original_language, vote: vote_average, poster: poster_path };
          });
        }
      }).catch(err => { console.error(err) }).then(() => { })
    },
    // REFRESH YOUR SEARCH FOR EACH ENTERED LETTER
    nameFilm(param) {
      this.query = param;
    },
    // SUBMIT SEARCH
    sendUrl() {
      // MOVIES URL CREATION
      const urlMovie = `${this.config.baseUri}${this.config.apiUriMovie}${this.config.api_key}&query=${this.query}&language=${this.config.language}`
      console.log(urlMovie);
      this.movieUrlGenerated = urlMovie;
      this.researchApiUri(urlMovie);
      // SERIES TV URL CREATION
      const urlTvSeries = `${this.config.baseUri}${this.config.apiUriTv}${this.config.api_key}&query=${this.query}&language=${this.config.language}`
      this.seriesUrlGenerated = urlTvSeries;
      this.researchApiUri(urlTvSeries);

    }
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
