import React from 'react';
import * as PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';

import NewMonthForm from '../organisms/NewMonthForm';
import GoalsList from '../organisms/GoalsList';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: '95%',
    margin: 'auto',
    padding: '5px',
    height: '50vh',
  },
  grid: {
    height: '100%',
    width: '100%',
  },
};

const CreateMonthTemplate = ({ goals, handleGoalAdd, handleDelete, createMonth, classes }) => {
  const initValues = {
    goal: '',
  };

  const handleCreateMonth = () => {
    createMonth(goals);
  };

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction={'column'}
        className={classes.grid}
        justify={'space-evenly'}
        alignItems={'center'}
      >
        <Grid item>Your goals for {moment().format('MMMM')}</Grid>
        <Grid item>
          <GoalsList className={classes.list} goals={goals} handleDelete={handleDelete} />
        </Grid>
        <Grid item>
          <Paper>
            <NewMonthForm
              goal={initValues}
              handleGoalAdd={handleGoalAdd}
              handleCreateMonth={handleCreateMonth}
            />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

CreateMonthTemplate.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleGoalAdd: PropTypes.func.isRequired,
  createMonth: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateMonthTemplate);
