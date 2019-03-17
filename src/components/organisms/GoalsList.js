import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

const GoalsList = ({ goals, handleDelete }) => {
  const renderGoals = () => {
    return goals.map(goal => {
      return (
        <Chip
          color={'primary'}
          key={goal}
          label={goal}
          onDelete={handleDelete(goal)}
          style={{ margin: '2px' }}
        />
      );
    });
  };

  return (
    <div style={{ height: '100px' }}>
      {goals.length > 0 ? renderGoals(goals) : 'There are none'}
    </div>
  );
};

GoalsList.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default GoalsList;
