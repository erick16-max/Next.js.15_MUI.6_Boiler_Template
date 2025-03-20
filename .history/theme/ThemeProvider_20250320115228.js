"use client";

import React, { createContext, useContext } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { LightTheme, DarkTheme } from "./theme";
import { LIGHT_MODE, DARK_MODE } from "@/constants";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

export default function MaterialThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(!prefersDarkMode ? DARK_MODE : LIGHT_MODE);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE
        );
      },
    }),
    []
  );

  const customTheme = mode === DARK_MODE ? DarkTheme : LightTheme;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </ColorModeContext.Provider>
  );
}
