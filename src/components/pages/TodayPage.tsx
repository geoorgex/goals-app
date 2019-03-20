import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../redux/rootReducer';
import { Day, getMonth, getTodayGoals } from '../../modules/month/monthReducer';
import { handleCheckboxChange } from '../../modules/month/actions';
import TodayTemplate from '../templates/TodayTemplate';

interface IStateProps {
  todayGoals: Day | undefined;
}

interface IDispatchProps {
  handleCheckboxChange: (day: number, goal: string) => void;
}

class TodayPage extends Component<IStateProps & IDispatchProps> {
  public render() {
    const { todayGoals } = this.props;

    return todayGoals ? (
      <TodayTemplate todayGoals={todayGoals} handleCheckClick={this.handleCheckClick} />
    ) : (
      <div>You haven't set any goals for today</div>
    );
  }

  private handleCheckClick = (day: number, goal: string) => () => {
    this.props.handleCheckboxChange(day, goal);
  };
}

const mapStateToProps = (state: IState) => {
  const month = getMonth(state);

  return {
    todayGoals: getTodayGoals(month),
  };
};

const mapDispatchToProps = {
  handleCheckboxChange,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodayPage);
