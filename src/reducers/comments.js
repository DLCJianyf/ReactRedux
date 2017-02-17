import { GET_COMMENTS } from '../actions/action';

const defaultState = {
    allComments: {
        data: [],
        totalPages: 1
    },
    newComments: {
        data: []
    }
};

export default function comments(state = defaultState, action) {

    switch (action.type) {

        case GET_COMMENTS:
            console.log(action.payload);

            return {
                ...state, allComments: {
                    data: action.payload.data
                }
            };
            break;

        default:
            return state;
            break;

    }
}
















