import { MonthAction } from './actions';
import { IState } from '../../redux/rootReducer';
const moment = require('moment');

export interface MonthState {
  monthCreated: boolean;
  goals: string[];
  days: Day[];
}

export interface Day {
  day: number;
  goals: Goal[];
}

export interface Goal {
  goal: string;
  done: boolean;
}

const initialState: MonthState = {
  monthCreated: false,
  goals: [],
  days: [],
};

const createDays = (goals: string[]) => {
  const monthArr = Array.from(Array(moment().daysInMonth()));

  return monthArr.map((month, index) => {
    return {
      day: index + 1,
      goals: goals.map(goal => {
        return { goal, done: false };
      }),
    };
  });
};

const monthReducer = (state = initialState, action: MonthAction) => {
  switch (action.type) {
    case 'CREATE_MONTH': {
      return {
        ...state,
        monthCreated: true,
        goals: action.payload,
        days: createDays(action.payload),
        currentDay: moment().date(),
      };
    }

    case 'HANDLE_CHECKBOX_CHANGE': {
      const { day, goal } = action.payload;

      const days = state.days.map(item => {
        if (item.day === day) {
          return {
            ...item,
            goals: item.goals.map(oldGoal => {
              if (oldGoal.goal === goal) {
                return {
                  ...oldGoal,
                  done: !oldGoal.done,
                };
              }
              return oldGoal;
            }),
          };
        }
        return item;
      });

      return {
        ...state,
        days,
      };
    }

    default:
      return state;
  }
};

export const getMonth = (state: IState) => state.month;
export const getDays = (month: MonthState) => month.days;
export const getGoals = (month: MonthState) => month.goals;
export const getMonthCreated = (month: MonthState) => month.monthCreated;

export default monthReducer;
