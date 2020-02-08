import axios from "axios";

export const GET_BORED_DATA = "GET_BORED_DATA";
export const UPDATE_BORED_DATA = "UPDATE_BORED_DATA";
export const ERROR_BORED_DATA = "ERROR_BORED_DATA";
export const UPDATE_BORED_TYPE = "UPDATE_BORED_TYPE";
export const GET_BORED_TYPE = "GET_BORED_TYPE";

export const SET_TYPE = "SET_TYPE";

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

export const getBoredType = (type) => dispatch => {

    dispatch({type: GET_BORED_DATA});

    axios.get(`https://www.boredapi.com/api/activity?type=${type}`)
        .then(res => {
            console.log(res);
            dispatch({type: UPDATE_BORED_TYPE, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type : ERROR_BORED_DATA, payload: err})
        })

}

export const setType = (type) => dispatch => {

    dispatch({type: SET_TYPE, payload: type})

}

