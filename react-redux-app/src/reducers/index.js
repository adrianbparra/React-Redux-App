import {GET_BORED_DATA, UPDATE_BORED_DATA, ERROR_BORED_DATA} from "../actions"


const initialState = {
    isFetching: false,
    error : "",
    data : "",
}



export const boredReducer = (state= initialState, action) => {

    switch(action.type) {
        case GET_BORED_DATA: 
            return {
                ...state,
                error : "",
                isFetching: true
            }
        case UPDATE_BORED_DATA:
            return {
                ...state,
                isFetching : false,
                error : "",
                data : action.payload,
            }
        case ERROR_BORED_DATA:
            return {
                ...state,
                isFetching :false,
                error: action.payload
            }
        default :
        return state;
    }
};