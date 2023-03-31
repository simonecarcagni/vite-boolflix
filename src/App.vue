<script>
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';
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
