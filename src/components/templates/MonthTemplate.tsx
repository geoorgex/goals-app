import * as React from 'react';
import CreateMonth from '../molecules/CreateMonth';
import MonthTable from '../organisms/MonthTable';
import Paper from '@material-ui/core/Paper';
import { createStyles, withStyles } from '@material-ui/styles';
import { Day } from '../../modules/month/monthReducer';
import { WithStyles } from '@material-ui/styles';

const style = createStyles({
  table: {
    width: '95%',
    maxWidth: 1200,
    margin: 'auto',
    marginTop: '50px',
  },
});

interface INewProps {
  days: Day[];
  goals: string[];
  isMonthCreated: boolean;
  handleCheckboxChange: (day: number, goal: string) => void;
}

const MonthTemplate: React.FC<INewProps & WithStyles<typeof style>> = ({
  goals,
  days,
  isMonthCreated,
  handleCheckboxChange,
  classes,
}) => {
  return (
    <>
      <div>
        {isMonthCreated ? (
          <Paper className={classes.table}>
            <MonthTable goals={goals} days={days} handleCheckboxChange={handleCheckboxChange} />
          </Paper>
        ) : (
          <CreateMonth />
        )}
      </div>
    </>
  );
};

export default withStyles(style)(MonthTemplate);
