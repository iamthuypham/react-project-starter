import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home';
import MainTheme from './theme/MainTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const rootElement = document.getElementById('main');

render(
  <MuiThemeProvider muiTheme={getMuiTheme(MainTheme)}>
    <Home />
  </MuiThemeProvider>,
  rootElement);