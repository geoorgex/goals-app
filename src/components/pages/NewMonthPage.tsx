import * as React from 'react';
import { connect } from 'react-redux';
import CreateMonthTemplate from '../templates/CreateMonthTemplate';
import { createMonth } from '../../modules/month/actions';
import { getMonth, getMonthCreated } from '../../modules/month/monthReducer';
import { redirect } from '../../router/history';
import { IState } from '../../redux/rootReducer';

interface IStateProps {
  isMonthCreated: boolean;
}

interface IDispatchProps {
  createMonth: (goals: Array<string>) => void;
}

interface IOwnState {
  goals: Array<string>;
}

class NewMonthPage extends React.Component<IStateProps & IDispatchProps, IOwnState> {
  state = {
    goals: [],
  };

  componentDidUpdate(prevProps: IStateProps & IDispatchProps, prevState: IOwnState) {
    if (this.props.isMonthCreated) {
      redirect('/');
    }
  }
  render() {
    const { createMonth } = this.props;

    return (
      <div>
        <CreateMonthTemplate
          goals={this.state.goals}
          handleDelete={this.handleDelete}
          handleGoalAdd={this.handleGoalAdd}
          createMonth={createMonth}
        />
      </div>
    );
  }

  handleGoalAdd = (goal: string) => {
    this.setState({ goals: [...this.state.goals, goal] });
  };

  handleDelete = (goal: string) => () => {
    this.setState({ goals: this.state.goals.filter(goalName => goalName !== goal) });
  };
}

const mapStateToProps = (state: IState) => {
  const month = getMonth(state);

  return {
    isMonthCreated: getMonthCreated(month),
  };
};

const mapDispatchToProps = {
  createMonth,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMonthPage);
