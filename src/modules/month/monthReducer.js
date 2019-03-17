import moment from 'moment';

const initialState = {
  monthCreated: false,
  goals: [],
  days: [],
};

const createDays = goals => {
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

const monthReducer = (state = initialState, action) => {
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

export const getMonth = state => state.month;
export const getDays = month => month.days;
export const getGoals = month => month.goals;
export const getMonthCreated = month => month.monthCreated;

export default monthReducer;
