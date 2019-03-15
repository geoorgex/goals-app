import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './history';
import Routes from './Routes';

const AppRouter = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default AppRouter;
