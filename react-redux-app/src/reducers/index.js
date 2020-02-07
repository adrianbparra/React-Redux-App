import {GET_BORED_DATA, UPDATE_BORED_DATA, ERROR_BORED_DATA, SET_TYPE, UPDATE_BORED_TYPE} from "../actions"


const initialState = {
    isFetching: false,
    error : "",
    data : "",
    type: [
        "social",
        "busywork",
        "recreational",
        "relaxation",
        "cooking",
        "education",
        "music",
        "charity",
    ],
    selectedType: ""
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
        case SET_TYPE: 
            return {
                ...state,
                selectedType : action.payload
            }
        case UPDATE_BORED_TYPE:
            return {
                ...state,
                isFetching : false,
                data : action.payload,
                error: ""
            }
        default :
        return state;
    }
};