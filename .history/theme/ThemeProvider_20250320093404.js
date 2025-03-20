"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline } from "@mui/material";
import { DarkTheme, LightTheme } from "./theme";
import  from "@mui/material";
import {ThemeProvider, useMediaQuery} from "@mui/material";



export default function MaterialThemeProvider({ children }) {
    // theme modes
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')
   const prefersLightMode = useMediaQuery('(prefers-color-scheme: dark)')
   
   const [mode, setMode] = React.useState(prefersLightMode ? LIGHT_MODE : DARK_MODE);

  // choose btween dark and light theme
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === LIGHT_MODE
        ? LightTheme
        : DarkTheme
      ),
    },
  });

   // Update the theme only if the mode changes
   const customTheme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <AppRouterCacheProvider>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
