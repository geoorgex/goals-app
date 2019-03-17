import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/pages/Homepage';
import NewMonthPage from '../components/pages/NewMonthPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Homepage} />
      <Route exact path={'/newMonth'} component={NewMonthPage} />
    </Switch>
  );
};

export default Routes;
