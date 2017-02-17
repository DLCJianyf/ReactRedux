import {BASE_WP_URL, HOME_PAGE_URL, CATEGORIES_URL, COMMENTS_URL} from '../wp-url';
import axios from 'axios';

const WP_URL = `${BASE_WP_URL}/wp/v2`;
export const GET_POSTS = 'GET_POSTS';
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_COMMENTS = "GET_COMMENTS";

let defaultQuery = {
    page: 1,
    per_page: 3
};

/*export function getPost(query = defaultQuery) {
    let request = axios.get(HOME_PAGE_URL, {
        params: query
    });
    return {
        type: GET_POSTS,
        payload: request
    }
}*/

export function getPosts(query = defaultQuery) {
    let request = axios.get(HOME_PAGE_URL);
    return {
        type: GET_POSTS,
        payload: request
    }
}

export function getCategories() {

    let request = axios.get(CATEGORIES_URL);

    return {
        type: GET_CATEGORIES,
        payload: request
    }

}


export function getComments() {

    let request = axios.get(COMMENTS_URL);

    return {
        type: GET_COMMENTS,
        payload: request
    };

}