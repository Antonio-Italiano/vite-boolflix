const config = {
    baseUri: 'https://api.themoviedb.org/3',
    key: '?api_key=60c994a9cf0f3146570d9eecac46737d',
    language: 'IT-it',
    apiUriMovie: '/search/movie',
    apiUriTv: '/search/tv',
    apiUriTvGenre: '/genre/tv/list',
    apiUriMovieGenre: '/genre/movie/list',
}

const navElement = ['Home', 'Serie TV', 'Film', 'Nuovi e popolari', 'La mia lista', 'Sfoglia per lingua'];
export { config, navElement };