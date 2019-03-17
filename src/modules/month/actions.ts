export type MonthAction =
  | { type: 'CREATE_MONTH'; payload: string[] }
  | { type: 'HANDLE_CHECKBOX_CHANGE'; payload: { day: number; goal: string } };

export const createMonth = (goals: string[]): MonthAction => ({
  type: 'CREATE_MONTH',
  payload: goals,
});

export const handleCheckboxChange = (day: number, goal: string): MonthAction => ({
  type: 'HANDLE_CHECKBOX_CHANGE',
  payload: { day, goal },
});
