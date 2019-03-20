import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHeading from '../molecules/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
const moment = require('moment');

import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Day, Goal } from '../../modules/month/monthReducer';
const classNames = require('classnames');

const styles = () =>
  createStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#e6e3e0',
      },
    },
    activeRow: {
      backgroundColor: '#ced4ff !important',
    },
  });

interface IProps {
  days: Day[];
  goals: string[];
  handleCheckboxChange: (day: number, goal: string) => void;
}

const MonthTable: React.FC<IProps & WithStyles<typeof styles>> = ({
  days,
  goals,
  classes,
  handleCheckboxChange,
}) => {
  const renderRows = () => {
    const currentDay = Number(moment().format('D'));

    return days.map(day => {
      return (
        <TableRow
          key={day.day}
          className={classNames(currentDay === day.day && classes.activeRow, classes.row)}
        >
          <TableCell key={day.day}>{moment(day.day, 'D').format('dddd Do')}</TableCell>
          {renderCells(day.day, day.goals)}
        </TableRow>
      );
    });
  };

  const renderCells = (day: number, goals: Goal[]) => {
    return goals.map(({ goal, done }) => {
      const currentDay = Number(moment().format('D'));

      return (
        <TableCell key={day + goal}>
          <Checkbox
            value={goal}
            checked={done}
            disabled={day !== currentDay}
            onChange={handleCheckboxClick(day, goal)}
          />
        </TableCell>
      );
    });
  };

  const handleCheckboxClick = (day: number, goal: string) => () => {
    handleCheckboxChange(day, goal);
  };

  return (
    <Table className={classes.root}>
      <TableHeading firstColumnName={'Days'} items={goals} />
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
};

export default withStyles(styles)(MonthTable);
