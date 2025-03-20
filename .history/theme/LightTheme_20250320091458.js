import { createTheme } from "@mui/material";
import { DARK_MODE, LIGHT_MODE } from "@/constants";



export const Liheme  = createTheme({
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