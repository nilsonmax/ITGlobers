import axios from 'axios';

export const GET_FORMULARIOS = "GET_FORMULARIOS";

export const getVideoGame = () => {
    return async (dispatch) => {
        try {

            const resp = await axios.get(`http://localhost:3001/formularios`)
            return dispatch({
                type: GET_FORMULARIOS,
                payload: resp.data
            })

        } catch (error) {
            console.log(error)
        }

    }
}

// export const getDataClear = (payload) => {
//     return {
//         type: DATA_CLEAR,
//         payload
//     }
// }