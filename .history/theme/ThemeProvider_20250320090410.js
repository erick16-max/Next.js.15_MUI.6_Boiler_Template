"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { theme } from "./theme";

export default function ThemeProvider({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
