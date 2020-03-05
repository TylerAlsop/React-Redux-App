import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions';

export const initialState = {
    catFact: "Click The Button To Get A Fact",
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
                error: ""
            }
        case "FETCHING_SUCCESS":
            return {
                ...state,
                isFetching: false,
                catFact: action.payload
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