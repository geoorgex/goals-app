import * as React from 'react';
import GoalChip from '../molecules/GoalChip';

interface IProps {
  goals: string[];
  handleDelete: (goal: string) => void;
}

const GoalsList: React.FC<IProps> = ({ goals, handleDelete }) => {
  const renderGoals = () => {
    return goals.map(goal => {
      return <GoalChip key={goal} goal={goal} handleDelete={handleDelete} />;
    });
  };

  return (
    <div style={{ height: '100px' }}>{goals.length > 0 ? renderGoals() : 'There are none'}</div>
  );
};

export default GoalsList;
