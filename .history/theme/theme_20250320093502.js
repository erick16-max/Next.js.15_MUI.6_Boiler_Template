import { createTheme } from "@mui/material";
import { LIGHT_MODE, DARK_MODE } from "@/constants";



export const LightTheme  = createTheme({
    palette: {
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
        mode: LIGHT_MODE,
    }
}) 


export const DarkTheme  = createTheme({
    palette: {
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
        mode: DAR,
    }
}) 