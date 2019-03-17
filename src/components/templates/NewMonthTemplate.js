import React from 'react';
import CreateMonth from '../molecules/CreateMonth';
import * as PropTypes from 'prop-types';
import MonthTable from '../organisms/MonthTable';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';

const style = {
  table: {
    width: '95%',
    margin: 'auto',
    marginTop: '100px',
  },
};

const NewMonthTemplate = ({ goals, days, isMonthCreated, handleCheckboxChange, classes }) => {
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

NewMonthTemplate.propTypes = {
  days: PropTypes.array.isRequired,
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
  isMonthCreated: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default withStyles(style)(NewMonthTemplate);
