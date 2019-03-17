import * as React from 'react';
import Chip from '@material-ui/core/Chip';

interface IProps {
  goals: Array<string>,
  handleDelete: (goal: string) => void
}

const GoalsList:React.FC<IProps> = ({ goals, handleDelete }) => {
  const renderGoals = () => {
    return goals.map(goal => {
      return (
        <Chip
          color={'primary'}
          key={goal}
          label={goal}
          onDelete={() => handleDelete(goal)}
          style={{ margin: '2px' }}
        />
      );
    });
  };

  return (
    <div style={{ height: '100px' }}>
      {goals.length > 0 ? renderGoals() : 'There are none'}
    </div>
  );
};

export default GoalsList;
