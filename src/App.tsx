import * as React from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { defaultTheme } from './utils/theme';
import Header from './components/molecules/Header';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/atoms/Loader';

const { store, persistor } = configureStore();

const style = {
  display: 'block',
  margin: '0 auto',
};

class App extends React.Component {
  public render() {
    return (
      <>
        <MuiThemeProvider theme={defaultTheme}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Loader />}>
              <Header />
              <AppRouter />
            </PersistGate>
          </Provider>
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
