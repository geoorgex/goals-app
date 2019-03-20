import * as React from 'react';
import Button from '@material-ui/core/Button';
import newMonthEnhancer from '../../formik/newMonthEnhancer';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';
import { FormikProps } from 'formik';
import { InitFormValues } from '../templates/CreateMonthTemplate';
import Grid from '@material-ui/core/Grid';

export interface INewMonthFormProps {
  goal: InitFormValues;
  hasGoals: boolean;
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
  hasGoals,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={'column'}>
        <div style={{ height: 80 }}>
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
        </div>
        <FormControl />
        <Button
          type={'submit'}
          variant={'contained'}
          color={'primary'}
          style={{ marginTop: '10px' }}
          size={'large'}
        >
          Add a goal
        </Button>
        <Button
          variant={'contained'}
          color={'secondary'}
          style={{ marginTop: '10px' }}
          onClick={handleCreateMonth}
          disabled={!hasGoals}
          size={'large'}
        >
          Continue
        </Button>
      </Grid>
    </form>
  );
};

export default newMonthEnhancer(NewMonthForm);
