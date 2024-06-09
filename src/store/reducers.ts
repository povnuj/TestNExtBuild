import { combineReducers } from 'redux';
import navReducer  from './NavStore';

const rootReducer = combineReducers({
    nav: navReducer,
});

export default rootReducer;