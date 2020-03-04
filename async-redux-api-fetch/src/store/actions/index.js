export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchingStart = item => {
    console.log("fetchingStart from actions", item);
    return {
      type: "FETCHING_START",
      payload: item
    };
};

export const fetchingSuccess = item => {
    console.log("fetchingSuccess from actions", item);
    return {
      type: "FETCHING_SUCCESS",
      payload: item
    };
};

export const fetchingFailure = item => {
    console.log("fetchingFailure from actions", item);
    return {
      type: "FETCHING_FAILURE",
      payload: item
    };
};




// Space X:
// https://api.spacexdata.com/v3/launches/latest
// found at: https://github.com/r-spacex/SpaceX-API

// Launch Library:
// https://launchlibrary.net/1.3/agency
// found at: https://launchlibrary.net/docs/1.3/api.html

// this list of animal apis:
// https://github.com/public-apis/public-apis#animals