import axios from "axios";

export const GET_BORED_DATA = "GET_BORED_DATA";
export const UPDATE_BORED_DATA = "UPDATE_BORED_DATA";
export const ERROR_BORED_DATA = "ERROR_BORED_DATA";

export const getBoredIdea = () => dispatch => {

    dispatch({type: GET_BORED_DATA});

    axios.get("https://www.boredapi.com/api/activity/")
        .then(res => {
            console.log(res);
            dispatch({type: UPDATE_BORED_DATA, payload: res.data})
        })
        .catch(err => {
            dispatch({type : ERROR_BORED_DATA, payload: err})
        })

}

