import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/pages/Homepage';

const Routes = () => {
  return (
    <Switch>
      <Route path={'/'} component={Homepage} />
    </Switch>
  );
};

export default Routes;
