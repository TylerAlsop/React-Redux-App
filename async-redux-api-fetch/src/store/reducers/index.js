import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions';

export const initialState = {};

export const reducer = (state = initialState, action) => {
    console.log("State and Action(s) in featureReducer", state, action);
    switch(action.type) {
        case "FETCHING_START":
            return {}
        case "FETCHING_SUCCESS":
            return {}
        case "FETCHING_FAILURE":
            return {}
        default:
            return state;
    }
};