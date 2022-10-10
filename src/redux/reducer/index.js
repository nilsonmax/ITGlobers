import {
    GET_API,
} from '../action/index.js'

const initialState = {
    feeds: [],
    copy: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API:
            return {
                ...state,
                feeds: action.payload,
                copy: action.payload
            }

        default:
            return state
    }
}

export default reducer;