import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import localforage from 'localforage';
import monthReducer, { MonthState, persistMonthReducerConfig } from '../modules/month/monthReducer';

export interface IState {
  month: MonthState;
}

const rootReducer: any = combineReducers({
  month: persistReducer(persistMonthReducerConfig(localforage), monthReducer),
});

export default rootReducer;
