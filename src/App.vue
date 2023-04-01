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
    created() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=8d0d7775723c827d2c6bf7ffec857539&query=wars&language=it')
            .then(response => {
                this.store.filmList = response.data.results;
            })
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=8d0d7775723c827d2c6bf7ffec857539&query=love&language=it')
            .then(response => {
                this.store.seriesTvList = response.data.results;
            })
    }
}
</script>

<template>
    <div class="ms_bg_color">
        <MyHeader />
        <MyMain />
    </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.ms_bg_color {
    background-image: linear-gradient(black, grey);
}
</style>
