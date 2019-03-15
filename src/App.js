import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from 'emotion-theming';
import AppRouter from './router/AppRouter';
import { defaultTheme } from "./utils/theme";

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={defaultTheme}>
          <AppRouter />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
