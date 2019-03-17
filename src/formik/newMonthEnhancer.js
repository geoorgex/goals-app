import * as Yup from 'yup';
import { withFormik } from 'formik';

export default withFormik({
  validationSchema: Yup.object().shape({
    goal: Yup.string().required("Enter your goals name"),
  }),
  mapPropsToValues: ({ goal }) => ({
    ...goal,
  }),
  handleSubmit: ({ goal }, { resetForm, setSubmitting, props: { handleGoalAdd } }) => {
    handleGoalAdd(goal);
    setSubmitting(false);
    resetForm({ goal: '' });
  },
  displayName: 'New month form',
});
