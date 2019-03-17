import { combineReducers, Reducer } from 'redux';
import monthReducer, { MonthState } from '../modules/month/monthReducer';

export interface IState {
  month: MonthState;
}

const rootReducer: Reducer<IState> = combineReducers({
  month: monthReducer,
});

export default rootReducer;
