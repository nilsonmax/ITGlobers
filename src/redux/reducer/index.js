import {
    GET_FORMULARIOS,
} from '../action/index.js'

const initialState = {
    formularios: [],
    copy: [],
    // detail: {},
    // genre: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORMULARIOS:
            return {
                ...state,
                formularios: action.payload,
                copy: action.payload
            }

        default:
            return state
    }
}

export default reducer;