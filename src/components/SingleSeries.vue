<script>

export default {
    name: 'SingleSeries',
    data() {
        return {

        }
    },
    props: {
        originalname: String,
        name: String,
        overview: String,
        language: String,
        image: String,
    }
}

</script>

<template>
    <div class="flip-card m-2">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="name">
            </div>
            <div class="flip-card-back">
                <h6>Titolo Originale: {{ originalname }}</h6>
                <h6>Titolo: {{ name }}</h6>
                <p class="overview ">Trama: {{ overview }}</p>
                <p>Lingua Originale: {{ language }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.flip-card {
    width: calc(100% / 5 - 1rem);
    height: 400px;
    perspective: 1000px;

    & :hover.flip-card-inner {
        transform: rotateY(180deg);
    }
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.flip-card-front {
    height: 100%;
    width: 100%;

    & img {
        object-fit: fill;
        height: 100%;
        width: 100%;
    }
}

.flip-card-back {
    height: 100%;
    background-color: black;
    color: white;
    transform: rotateY(180deg);

    & p {
        font-size: 12px;
    }

    & .overview {
        height: 150px;
        width: 240px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & .overview:hover {
        white-space: normal;
        overflow-y: scroll;
    }
}
</style>