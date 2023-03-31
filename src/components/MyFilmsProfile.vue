<script>
import SingleFilm from './SingleFilm.vue';

export default {
    name: 'MyFilmsProfile',
    components: {
        SingleFilm,
    },
    data() {
        return {

        }
    }
}

</script>

<template>
    <SingleFilm />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>