import * as Yup from 'yup';
import { withFormik } from 'formik';
import { INewMonthFormProps } from '../components/organisms/NewMonthForm';
import { InitFormValues } from '../components/templates/CreateMonthTemplate';

export default withFormik<INewMonthFormProps, InitFormValues>({
  validationSchema: Yup.object().shape({
    goal: Yup.string().required('Enter your goals name'),
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
