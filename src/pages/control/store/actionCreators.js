import * as actionTypes from './constants';

import makeDataArray from "../../../local-data/local-data"

const setTimeAction = (time) => ({
    type: actionTypes.SET_CLICKED_TIME,
    time
});

const setListItemNumberAction = (number) => ({
    type: actionTypes.SET_LIST_ITEM_NUMBER,
    item: makeDataArray(number)
})

export function setClickedTime(time) {
    return dispatch => {
        dispatch(setTimeAction(time));
    }
}

export function setListItemNumber(number) {
    return dispatch => {
        dispatch(setListItemNumberAction(number));
    }
}