import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    clickedTime: 0,
    listItem: []
});

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SET_CLICKED_TIME:
            return state.set("clickedTime", action.time);
        case actionTypes.SET_LIST_ITEM_NUMBER:
            return state.set("listItem", action.item);
        default:
            return state;
    }
}

export default reducer;