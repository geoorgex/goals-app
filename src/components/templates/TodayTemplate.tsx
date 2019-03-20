import React from 'react';
import { Checkbox, withStyles } from '@material-ui/core';
import { Day } from '../../modules/month/monthReducer';
import { WithStyles } from '@material-ui/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';

interface Props {
  todayGoals: Day;
  handleCheckClick: (day: number, goal: string) => void;
}

const styles = createStyles({
  root: {
    width: '95%',
    maxWidth: 1200,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    width: 100,
  },
});

const TodayTemplate: React.FC<Props & WithStyles<typeof styles>> = ({
  classes,
  todayGoals,
  handleCheckClick,
}) => {
  const handleClick = (day: number, goal: string) => () => {
    handleCheckClick(day, goal);
  };

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <Typography variant={'h5'}>Your goals for today are:</Typography>
        {todayGoals.goals.map(({ goal, done }) => {
          return (
            <li key={goal} className={classes.item}>
              {goal} <Checkbox checked={done} onChange={handleClick(todayGoals.day, goal)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default withStyles(styles)(TodayTemplate);
