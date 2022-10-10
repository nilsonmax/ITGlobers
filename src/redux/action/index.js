import axios from 'axios';

export const GET_API = "GET_API";

export const fetchInstagramPost = (limit, current) => {
    return async (dispatch) => {
        try {
            const resp = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${current}`)
            return dispatch({
                type: GET_API,
                payload: resp.data.data
            })
        } catch (err) {
            console.log('error', err)
        }
    }
}