import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    clickedTime: 0
});

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SET_CLICKED_TIME:
            return state.set("clickedTime", action.time);
        default:
            return state;
    }
}

export default reducer;