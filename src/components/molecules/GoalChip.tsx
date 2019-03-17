import * as React from 'react';
import { Chip } from '@material-ui/core';

interface Props {
  goal: string;
  handleDelete: (goal: string) => void;
}

const GoalChip: React.FC<Props> = ({ goal, handleDelete }) => {
  const onDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDelete(goal);
  };

  return (
    <Chip
      color={'primary'}
      key={goal}
      label={goal}
      onDelete={onDeleteClick}
      style={{ margin: '2px' }}
    />
  );
};

export default GoalChip;
