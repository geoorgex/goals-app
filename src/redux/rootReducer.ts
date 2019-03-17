import { combineReducers, Reducer } from 'redux';
import monthReducer, { monthState } from '../modules/month/monthReducer';

export interface IState {
  month: monthState
}

const rootReducer: Reducer<IState> = combineReducers({
  month: monthReducer
});

export default rootReducer;
