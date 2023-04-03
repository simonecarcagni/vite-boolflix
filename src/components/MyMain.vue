<script>
import { store } from '../store.js';
import MyCardsProfile from './MyCardsProfile.vue'

export default {
    name: 'MyMain',
    components: {
        MyCardsProfile,
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
            <div class="container pb-5">
                <MyCardsProfile />
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
