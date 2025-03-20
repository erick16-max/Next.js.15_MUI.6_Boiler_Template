import React from "react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { LIGHT_MODE } from "@/constants";
import { DarkTheme, LightTheme } from "@/theme/theme";
import ThemeToggleButton from "@/components/general/ToggleThemeButton";

export default function Home() {
   
  return (
    <Box p={2}>
      <Button variant="contained">next.js boiler plate</Button>
      <Stack useMediaQuery={1}>
        <Typography variant="h5" color="text.primary">primary text</Typography>
        <Typography color="text.secondary">secondary text</Typography>
      </Stack>
      <ThemeToggleButton />
    </Box>
  );
}
