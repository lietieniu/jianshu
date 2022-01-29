import { combineReducers } from 'redux-immutable';
import { Header } from '../common/header/store';
import { homeReducer } from '../pages/home/store/index';

export const reducer = combineReducers({
    Header,
    homeReducer
})