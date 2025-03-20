"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { DarkTheme, LightTheme } from "./theme";

export default function MaterialThemeProvider({ children }) {
  return (
    <AppRouterCacheProvider>
      <CssBaseline />
      <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
