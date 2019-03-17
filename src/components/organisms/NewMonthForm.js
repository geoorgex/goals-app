import React from 'react';
import Button from '@material-ui/core/Button';
import newMonthEnhancer from '../../formik/newMonthEnhancer';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import * as PropTypes from 'prop-types';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const NewMonthForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleCreateMonth,
  classes,
}) => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormControl>
        <TextField
          error={errors.goal && touched.goal}
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

NewMonthForm.propTypes = {
  goal: PropTypes.object.isRequired,
  handleCreateMonth: PropTypes.func.isRequired,
  handleGoalAdd: PropTypes.func.isRequired,
};

export default withStyles(styles)(newMonthEnhancer(NewMonthForm));
