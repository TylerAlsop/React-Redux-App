import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions';

export const initialState = {
    data: null,
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    console.log("State and Action(s) in featureReducer", state, action);
    switch(action.type) {
        case "FETCHING_START":
            return {
                ...state,
                isFetching: true,

            }
        case "FETCHING_SUCCESS":
            return {
                ...state,
                isFetching: false,

            }
        case "FETCHING_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: 'Failed to fetch'
            }
        default:
            return state;
    }
};