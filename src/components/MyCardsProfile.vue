<script>
import SingleSeries from './SingleSeries.vue';
import SingleFilm from './SingleFilm.vue';
import { store } from '../store.js';
export default {
    name: 'MyFilmsProfile',
    components: {
        SingleFilm,
        SingleSeries,
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <h1 class="text-center text-light">Film</h1>
    <div class="d-flex flex-wrap mb-5">
        <SingleFilm v-for="film in store.filmList" :image="film.poster_path" :originaltitle="film.original_title"
            :title="film.title" :overview="film.overview" :language="film.original_language" :vote="film.vote_average" />
    </div>
    <h1 class="text-center text-light">Serie TV</h1>
    <div class="d-flex flex-wrap">
        <SingleSeries v-for="serie in store.seriesTvList" :image="serie.poster_path" :originalname="serie.original_name"
            :name="serie.name" :overview="serie.overview" :language="serie.original_language" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>