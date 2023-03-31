<script>
import MyFilmsProfile from './MyFilmsProfile.vue';
import { store } from '../store.js'
export default {
    name: 'MyMain',
    components: {
        MyFilmsProfile,
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
        <div class="container">
            <MyFilmsProfile />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.main_container {
    min-height: 90vh;
}
</style>
