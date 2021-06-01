import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    realListAppearTime: 0
});

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SET_REAL_APPEAR_TIME:
            return state.set("realListAppearTime", action.time);
        default:
            return state;
    }
}

export default reducer;