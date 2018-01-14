import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home';
import MainTheme from './theme/MainTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';

const rootElement = document.getElementById('main');

render(
  <MuiThemeProvider theme={createMuiTheme(MainTheme)}>
    <Home />
  </MuiThemeProvider>,
  rootElement);