import * as actionTypes from './constants';

const setTimeAction = (time) => ({
    type: actionTypes.SET_CLICKED_TIME,
    time
});

export function setClickedTime(time) {
    return dispatch => {
        dispatch(setTimeAction(time));
    }
}