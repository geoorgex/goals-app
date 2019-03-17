import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHeading from '../molecules/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { day, goal } from '../../modules/month/monthReducer';
import { Theme } from '@material-ui/core';
const moment = require('moment');

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#e6e6e6',
      },
    },
  });

interface IProps {
  days: Array<day>;
  goals: Array<string>;
  handleCheckboxChange: (day: number, goal: string) => void;
}

const MonthTable: React.FC<IProps & WithStyles<typeof styles>> = ({
  days,
  goals,
  classes,
  handleCheckboxChange,
}) => {
  const renderRows = () => {
    return days.map(day => {
      return (
        <TableRow key={day.day} className={classes.row}>
          <TableCell key={day.day}>{moment(day.day, 'D').format('dddd Do')}</TableCell>
          {renderCells(day.day, day.goals)}
        </TableRow>
      );
    });
  };

  const renderCells = (day: number, goals: Array<goal>) => {
    return goals.map(({ goal, done }) => {
      return (
        <TableCell key={day + goal}>
          <Checkbox value={goal} checked={done} onChange={handleCheckboxClick(day, goal)} />
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
