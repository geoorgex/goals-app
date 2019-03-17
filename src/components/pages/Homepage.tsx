import * as React from 'react';
import { connect } from 'react-redux';

import { day, getDays, getGoals, getMonth, getMonthCreated } from '../../modules/month/monthReducer';
import NewMonthTemplate from '../templates/NewMonthTemplate';
import { handleCheckboxChange } from '../../modules/month/actions';
import { IState } from '../../redux/rootReducer';

interface StateProps {
  days: Array<day>,
  goals: Array<string>,
  isMonthCreated: boolean,
}

interface DispatchProps {
  handleCheckboxChange: (day: number, goal: string) => void
}

class Homepage extends React.Component<StateProps & DispatchProps> {
  render() {
    const { days, goals, isMonthCreated, handleCheckboxChange } = this.props;

    return (
      <div>
        <NewMonthTemplate
          days={days}
          goals={goals}
          isMonthCreated={isMonthCreated}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state: IState) {
  const month = getMonth(state);

  return {
    days: getDays(month),
    goals: getGoals(month),
    isMonthCreated: getMonthCreated(month),
  };
}

const mapDispatchToProps = {
  handleCheckboxChange,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
