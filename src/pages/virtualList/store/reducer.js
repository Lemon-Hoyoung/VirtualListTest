import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    virtualListAppearTime: 0
});

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SET_VIRTUAL_APPEAR_TIME:
            return state.set("virtualListAppearTime", action.time);
        default:
            return state;
    }
}

export default reducer;