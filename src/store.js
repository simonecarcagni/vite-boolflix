import { reactive } from "vue";

export const store = reactive(
    {
        filmList: [],
        seriesTvList: [],
        searchInput: '',
    }
)