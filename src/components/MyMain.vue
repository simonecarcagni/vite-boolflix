<script>
import { store } from '../store.js';
import MyFilmsProfile from './MyFilmsProfile.vue';
import MySeriesProfile from './MySeriesProfile.vue';

export default {
    name: 'MyMain',
    components: {
        MyFilmsProfile,
        MySeriesProfile,
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="main_container">
        <div v-if="store.filmList.length > 0">
            <h1 class="text-center text-light">Film</h1>
            <div class="container mb-5">
                <MyFilmsProfile />
            </div>
            <h1 class="text-center text-light">Serie TV</h1>
            <div class="container mt-5">
                <MySeriesProfile />
            </div>
        </div>
        <div v-else>
            <h1 class="text-center text-light">Inserisci un dato di ricerca</h1>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.main_container {
    min-height: 90vh;
}
</style>
