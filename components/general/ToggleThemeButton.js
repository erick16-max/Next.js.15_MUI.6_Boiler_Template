"use client";

import React from "react";
import { Button, useTheme } from "@mui/material";
import { useColorMode } from "@/theme/ThemeProvider";
import {DARK_MODE} from "../../constants.js"

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Button 
        variant="contained" 
        onClick={toggleColorMode}

        >
      {theme.palette.mode === DARK_MODE ? 'Go Light' : 'Go Dark'}
    </Button>
  );
}
