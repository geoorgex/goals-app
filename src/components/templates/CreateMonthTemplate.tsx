import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, withStyles } from '@material-ui/styles';

import NewMonthForm from '../organisms/NewMonthForm';
import GoalsList from '../organisms/GoalsList';
import Grid from '@material-ui/core/Grid';
import { WithStyles } from '@material-ui/styles/withStyles';
const moment = require('moment');

const styles = createStyles({
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
});

interface IProps {
  goals: Array<string>;
  handleGoalAdd: (goal: string) => void;
  handleDelete: (goal: string) => void;
  createMonth: (goals: Array<string>) => void;
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
          <GoalsList goals={goals} handleDelete={handleDelete} />
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

export default withStyles(styles)(CreateMonthTemplate);
