import { createMuiTheme } from 'material-ui/styles';
import breakpoints from './breakpoints';

export default createMuiTheme({
  "direction": "ltr",
  palette: {
    primary: {
      main: "#388e3c",
      dark: "#00600f",
      light: "#6abf69"
    },
    accent:{
      main: "#ec407a",
      dark: "#b4004e",
      light: "#ff77a9"
    },
    error: {
      dark: "",
      light: ""
    },
    common: {
      text: "#000000"
    }
  },
  typography: {
    display4: {},
    display3: {},
    display2: {},
    display1: {},
    headlind: {},
    title: {},
    subheading: {},
    body1: {},
    body2: {},
    caption: {},
    button: {}
  },
  breakpoints: {
    keys: Object.keys(breakpoints),
    values: breakpoints,
  },
  spacing: 8,
  custom: {},
  overrides: {}
})