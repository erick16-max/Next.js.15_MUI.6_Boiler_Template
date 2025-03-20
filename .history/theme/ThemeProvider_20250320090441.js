"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { theme } from "./theme";
import Theme

export default function MaterialThemeProvider({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
