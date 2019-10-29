import { ADD_ARTICLE } from "./types"

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE, payload
    };

}
