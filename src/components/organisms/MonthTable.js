import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHeading from '../molecules/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import moment from 'moment';
import { withStyles } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
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

const MonthTable = ({ days, goals, classes, handleCheckboxChange }) => {
  const renderRows = () => {
    return days.map(day => {
      return (
        <TableRow key={day.day} className={classes.row}>
          <TableCell key={day.day}>{moment(day.day, 'D').format('dddd Do')}</TableCell>
          {renderCells(day)}
        </TableRow>
      );
    });
  };

  const renderCells = ({ day, goals }) => {
    return goals.map(({ goal, done }) => {
      return (
        <TableCell key={day + goal}>
          <Checkbox value={goal} checked={done} onChange={handleCheckboxClick(day, goal)} />
        </TableCell>
      );
    });
  };

  const handleCheckboxClick = (day, goal) => () => {
    handleCheckboxChange(day, goal);
  };

  return (
    <Table className={classes.root}>
      <TableHeading firstColumnName={'Days'} items={goals} />
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
};

MonthTable.propTypes = {
  days: PropTypes.array.isRequired,
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(MonthTable);
