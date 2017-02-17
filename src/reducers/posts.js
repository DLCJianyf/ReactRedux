import { GET_POSTS } from '../actions/action';

const defaultState = {
    posts: [],
    page: 1,
    perPage: 3,
    totalPages: 0,
    status: 'start'
};

export default function posts(state = defaultState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                posts: action.payload.data,
                totalPages: 8
            }
            break;
    
        default:
            return state; 
            break;
    }
}