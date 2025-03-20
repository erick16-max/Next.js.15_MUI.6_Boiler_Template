"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline } from "@mui/material";
import { DarkTheme, LightTheme } from "./theme";
import {ThemeProvider, useMediaQuery, createTheme} from "@mui/material";
import { LIGHT_MODE, DARK_MODE } from "@/constants";



export default function MaterialThemeProvider({ children }) {
    // theme modes
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
    
   
    const [mode, setMode] = React.useState(prefersDarkMode ? DARK_MODE : LIGHT_MODE);


   const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
          // always to be light mode unless ui update
          prevMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE
        );
      },
    }),
    []
  );

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
