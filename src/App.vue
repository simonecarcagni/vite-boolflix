<script>
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';
import axios from 'axios';

import { store } from './store.js'
export default {
    components: {
        MyHeader,
        MyMain
    },
    data() {
        return {
            store
        }
    },
    methods: {

        searchData() {

            let queryMovieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8d0d7775723c827d2c6bf7ffec857539&language=it';

            let queryTvUrl = 'https://api.themoviedb.org/3/search/tv?api_key=8d0d7775723c827d2c6bf7ffec857539&language=it';

            if (store.searchInput.length > 0) {
                queryMovieUrl += `&query=${store.searchInput}`;
                queryTvUrl += `&query=${store.searchInput}`;
            }

            axios.get(queryMovieUrl)
                .then(response => {
                    this.store.filmList = response.data.results;
                })

            axios.get(queryTvUrl)
                .then(response => {
                    this.store.seriesTvList = response.data.results;
                })

            this.store.searchInput = '';
        },

        resetHome() {
            this.store.filmList = '';
            this.store.seriesTvList = '';
        }
    },
    created() {
        this.searchData();
    }
}
</script>

<template>
    <div class="ms_bg_color">
        <MyHeader @search="searchData" @home="resetHome" />
        <MyMain />
    </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.ms_bg_color {
    background-image: linear-gradient(black, grey);
}
</style>
