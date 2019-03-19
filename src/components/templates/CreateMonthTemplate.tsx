import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, withStyles } from '@material-ui/styles';

import NewMonthForm from '../organisms/NewMonthForm';
import GoalsList from '../organisms/GoalsList';
import Grid from '@material-ui/core/Grid';
import { WithStyles } from '@material-ui/styles/withStyles';
import { Typography } from '@material-ui/core';
const moment = require('moment');

const styles = createStyles({
  root: {
    width: '95%',
    maxWidth: 600,
    margin: 'auto',
    padding: '5px',
    height: '50vh',
  },
  grid: {
    height: '100%',
    width: '100%',
  },
});

interface IProps {
  goals: string[];
  handleGoalAdd: (goal: string) => void;
  handleDelete: (goal: string) => void;
  createMonth: (goals: string[]) => void;
}

export interface InitFormValues {
  goal: string;
}

const CreateMonthTemplate: React.FC<IProps & WithStyles<typeof styles>> = ({
  goals,
  handleGoalAdd,
  handleDelete,
  createMonth,
  classes,
}) => {
  const initValues: InitFormValues = {
    goal: '',
  };

  const handleCreateMonth = () => {
    createMonth(goals);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction={'column'}
        className={classes.grid}
        justify={'space-evenly'}
        alignItems={'center'}
      >
        <Typography variant={'headline'}>Your goals for {moment().format('MMMM')}</Typography>
        <Grid item>
          <GoalsList goals={goals} handleDelete={handleDelete} />
        </Grid>
        <Grid item>
          <NewMonthForm
            goal={initValues}
            handleGoalAdd={handleGoalAdd}
            handleCreateMonth={handleCreateMonth}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CreateMonthTemplate);
