export const BASE_WP_URL = 'http://localhost:80/wordpress/wp-json';
export const CREATE_COMMENT_URL = `${BASE_WP_URL}/comments`;

const BASE_AJAX_URL = 'http://localhost:80/wordpress';

export const HOME_PAGE_URL = `${BASE_AJAX_URL}/wp-content/themes/learning/src/data/homePage.json`;
export const CATEGORIES_URL = `${BASE_AJAX_URL}/wp-content/themes/learning/src/data/articals.json`;
export const COMMENTS_URL = `${BASE_AJAX_URL}/wp-content/themes/learning/src/data/comments.json`;

//console.log(process.env.NODE_ENV);