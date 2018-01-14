import { createMuiTheme } from 'material-ui/styles';
import breakpoints from './breakpoints';

export default createMuiTheme({
  "direction": "ltr",
  palette: {
    primaryDark: "",
    primaryLight: "",
    accentDark: "",
    accentLight: "",
    error: "",
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