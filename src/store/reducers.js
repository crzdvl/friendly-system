import { combineReducers } from 'redux';
import users from './users/reducers';

const rootReducer = combineReducers({
    users,
})

export default rootReducer;
