<script>
import SingleFilm from './SingleFilm.vue';
import { store } from '../store.js';
export default {
    name: 'MyFilmsProfile',
    components: {
        SingleFilm,
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="d-flex flex-wrap">
        <SingleFilm v-for="film in store.filmList" :image="film.poster_path" :originaltitle="film.original_title"
            :title="film.title" :overview="film.overview" :language="film.original_language" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>