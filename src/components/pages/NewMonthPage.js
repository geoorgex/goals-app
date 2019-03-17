import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateMonthTemplate from '../templates/CreateMonthTemplate';
import { createMonth } from '../../modules/month/actions';
import { getMonth, getMonthCreated } from '../../modules/month/monthReducer';
import { redirect } from '../../router/history';

class NewMonthPage extends Component {
  state = {
    goals: [],
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
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

  handleGoalAdd = goal => {
    this.setState({ goals: [...this.state.goals, goal] });
  };

  handleDelete = goal => () => {
    this.setState({ goals: this.state.goals.filter(goalName => goalName !== goal) });
  };
}

const mapStateToProps = state => {
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
