<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store.js';
export default {
    name: 'MyFilmsProfile',
    components: {
        SingleCard,
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
        <SingleCard v-for="(film, index) in store.filmList" :image="film.poster_path" :originaltitle="film.original_title"
            :title="film.title" :overview="film.overview" :language="film.original_language" :vote="film.vote_average"
            :key="index" />
    </div>
    <h1 class="text-center text-light">Serie TV</h1>
    <div class="d-flex flex-wrap">
        <SingleCard v-for="(serie, index) in store.seriesTvList" :image="serie.poster_path"
            :originalname="serie.original_name" :name="serie.name" :overview="serie.overview"
            :language="serie.original_language" :vote="serie.vote_average" :key="index" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>