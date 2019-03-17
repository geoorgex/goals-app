import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDays, getGoals, getMonth, getMonthCreated } from '../../modules/month/monthReducer';
import NewMonthTemplate from '../templates/NewMonthTemplate';
import { handleCheckboxChange } from '../../modules/month/actions';

class Homepage extends Component {
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

function mapStateToProps(state) {
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

Homepage.propTypes = {
  days: PropTypes.array.isRequired,
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
  isMonthCreated: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
