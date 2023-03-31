<script>
import { store } from '../store.js'
export default {
    name: 'MyHeader',
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="ms_header_container">
        <div class="d-flex justify-content-between py-3 px-5">
            <h1 class="text-danger">Boolflix</h1>
            <div class="d-flex ms_search_bar">
                <input type="text" class="form-control mx-1" placeholder="Inserisci il film da cercare"
                    aria-label="Film Recipient" aria-describedby="button-addon2">
                <button class="btn btn-danger mx-1" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.ms_header_container {
    height: 10vh;
}

.ms_search_bar {
    height: 2.5rem;
}
</style>
