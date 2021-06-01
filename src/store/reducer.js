import { combineReducers } from 'redux-immutable';
import { reducer as realListTime } from '../pages/realList/store';
import { reducer as clickTime } from "../pages/control/store";
import { reducer as virtualListTime } from "../pages/virtualList/store";

export const cReducer = combineReducers({
    realListTime,
    clickTime,
    virtualListTime
});