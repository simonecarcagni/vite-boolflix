<script>
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

        }
    }
}

</script>

<template>
    <div class="main_container">
        <h1 class="text-center text-light">Film</h1>
        <div class="container mb-5">
            <MyFilmsProfile />
        </div>
        <h1 class="text-center text-light">Serie TV</h1>
        <div class="container mt-5">
            <MySeriesProfile />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.main_container {
    min-height: 90vh;
}
</style>
