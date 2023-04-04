<script>

export default {
    name: 'SingleFilm',
    data() {
        return {
            listOfFlags: ['en', 'fr', 'it'],
            listOfStars: []
        }
    },
    props: {
        originaltitle: String,
        title: String,
        originalname: String,
        name: String,
        overview: String,
        language: String,
        image: String,
        vote: Number
    },
    methods: {
        getImagePath(path) {
            return new URL(path, import.meta.url).href
        },
        fullStar(vote) {
            let fullStar = Math.floor(Math.round(vote) / 2);

            return fullStar;
        },
        emptyStar(vote) {
            let emptyStar = (5 - Math.floor(Math.round(vote) / 2));

            return emptyStar;
        },
        capitalizedText(language) {
            let capitalizedLanguage = language.toUpperCase();

            return capitalizedLanguage;
        }

    }
}

</script>

<template>
    <div class="flip-card m-2">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="title">
            </div>
            <div class="flip-card-back">

                <h6>Titolo Originale: {{ title ? title : name }}</h6>
                <h6>Titolo: {{ originaltitle ? originaltitle : originalname }}</h6>

                <p class="overview" maxlength="100">Trama: {{ overview }}</p>
                <p class="flag-container" v-if="listOfFlags.includes(language)">
                    Lingua Originale:
                    <img :src="getImagePath(`../assets/${language}.png`)" :alt="`Flag of ${language}`">
                </p>
                <p v-else>
                    Lingua Originale:
                    {{ capitalizedText(language) }}
                </p>
                <h6>
                    <i v-for="n in (fullStar(vote))" class="fa-solid fa-star" style="color: #ffff00;"></i>
                    <i v-for="n in (emptyStar(vote))" class="fa-regular fa-star"></i>

                </h6>
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
    background-image: linear-gradient(#bb2d3b, black);
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

    & .flag-container {
        & img {
            height: 25px;
            width: 40px;
        }
    }
}
</style>