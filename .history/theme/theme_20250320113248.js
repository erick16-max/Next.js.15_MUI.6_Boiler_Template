import { createTheme } from "@mui/material";
import { LIGHT_MODE, DARK_MODE } from "@/constants";
import grey

export const LightTheme = createTheme({
  palette: {
    mode: LIGHT_MODE,
    primary: {
      light: '#5c85d6',
      main: '#3366cc',
      dark: '#2952a3',
    },
    secondary: {
      light: '#ffad5c',
      main: '#ff9933',
      dark: '#cc7a29',
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    mode: DARK_MODE,
    primary: {
      light: '#5c85d6',
      main: '#3366cc',
      dark: '#2952a3',
    },
    secondary: {
      light: '#ffad5c',
      main: '#ff9933',
      dark: '#cc7a29',
    },
    background: {
        default: '#1c1e21',
        paper: '#1c1e21',
      },
      text: {
        primary: 'red',
        secondary: 'green',
      },
  },
});
