import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { LIGHT_MODE } from "@/constants";
import { DarkTheme, LightTheme } from "@/theme/theme";

export default function Home() {
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
    <Box p={2}>
      <Button variant="contained">next.js boiler plate</Button>
      <Stack mt={1}>
        <Typography variant="h5" color="text.primary">primary text</Typography>
        <Typography color="text.secondary">secondary text</Typography>
      </Stack>
    </Box>
  );
}
