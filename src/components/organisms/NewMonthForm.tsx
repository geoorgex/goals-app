import * as React from 'react';
import Button from '@material-ui/core/Button';
import newMonthEnhancer from '../../formik/newMonthEnhancer';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';
import { FormikProps } from 'formik';
import { InitFormValues } from '../templates/CreateMonthTemplate';

export interface INewMonthFormProps {
  goal: InitFormValues;
  handleGoalAdd: (goal: string) => void;
  handleCreateMonth: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const NewMonthForm: React.FC<FormikProps<InitFormValues> & INewMonthFormProps> = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleCreateMonth,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <TextField
          error={!!errors.goal && !!touched.goal}
          type={'text'}
          name={'goal'}
          label={'New goal'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.goal}
          variant={'outlined'}
        />
        {errors.goal && touched.goal && <FormHelperText error>{errors.goal}</FormHelperText>}
      </FormControl>
      <Button type={'submit'} variant={'contained'} color={'primary'} style={{ marginTop: '10px' }}>
        Add a goal
      </Button>
      <Button
        variant={'contained'}
        color={'secondary'}
        style={{ marginTop: '10px' }}
        onClick={handleCreateMonth}
      >
        Continue
      </Button>
    </form>
  );
};

export default newMonthEnhancer(NewMonthForm);
