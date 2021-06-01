import * as actionTypes from './constants';

const setTimeAction = (time) => ({
    type: actionTypes.SET_REAL_APPEAR_TIME,
    time
});

export function setAppearedTime(time) {
    return dispatch => {
        dispatch(setTimeAction(time));
    }
}