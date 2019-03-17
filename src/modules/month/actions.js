export const actions = {
  CREATE_MONTH: 'CREATE_MONTH',
  HANDLE_CHECKBOX_CHANGE: 'HANDLE_CHECKBOX_CHANGE',
};

export const createMonth = goals => ({
  type: actions.CREATE_MONTH,
  payload: goals,
});

export const handleCheckboxChange = (day, goal) => ({
  type: actions.HANDLE_CHECKBOX_CHANGE,
  payload: { day, goal },
});
