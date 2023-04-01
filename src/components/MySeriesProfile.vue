<script>
import SingleSeries from './SingleSeries.vue';
import { store } from '../store.js';

export default {
    name: 'MySeriesProfile',
    components: {
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
    <div class="d-flex flex-wrap">
        <SingleSeries v-for="serie in store.seriesTvList" :image="serie.poster_path" :originalname="serie.original_name"
            :name="serie.name" :overview="serie.overview" :language="serie.original_language" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>