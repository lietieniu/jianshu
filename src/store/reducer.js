import { combineReducers } from 'redux-immutable';
import { Header } from '../common/header/store';
import { homeReducer } from '../pages/home/store/index';
import { detailReducer } from '../pages/detail/store/reducer';
import { loginReducer } from '../pages/login/store/reducer';

export const reducer = combineReducers({
    Header,
    homeReducer,
    detailReducer,
    loginReducer
})