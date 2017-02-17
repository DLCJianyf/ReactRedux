import { GET_CATEGORIES } from '../actions/action';

const defaultState = {
    categories: {
        data: []
    }
};

export default function categories(state = defaultState, action) {

    switch (action.type) {

        case GET_CATEGORIES:
            return {
                ...state.categories,
                categories: {
                    data: action.payload.data
                }
            };
            break;

        default:
            return state;
            break;

    }

}
