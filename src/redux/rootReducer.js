import { combineReducers } from 'redux';
import monthReducer from '../modules/month/monthReducer';

const rootReducer = combineReducers({
  month: monthReducer
});

export default rootReducer;
