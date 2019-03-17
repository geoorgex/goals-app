import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { defaultTheme } from './utils/theme';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <>
        <MuiThemeProvider theme={defaultTheme}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
