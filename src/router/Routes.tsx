import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/pages/Homepage';
import NewMonthPage from '../components/pages/NewMonthPage';
import TodayPage from '../components/pages/TodayPage';
import { connect } from 'react-redux';
import { IState } from '../redux/rootReducer';
import { getMonth, getMonthCreated } from '../modules/month/monthReducer';
import { redirect } from './history';

interface IStateProps {
  monthCreated: boolean;
}

class Routes extends React.Component<IStateProps> {
  public componentDidMount() {
    if (!this.props.monthCreated) {
      redirect('newMonth');
    }
  }

  public render() {
    return (
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/newMonth'} component={NewMonthPage} />
        <Route exact path={'/today'} component={TodayPage} />
      </Switch>
    );
  }
}

function mapStateToProps(state: IState) {
  const month = getMonth(state);

  return {
    monthCreated: getMonthCreated(month),
  };
}

export default connect(mapStateToProps)(Routes);
