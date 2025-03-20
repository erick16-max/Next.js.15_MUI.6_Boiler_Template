"use client";

import React from "react";
import { Button } from "@mui/material";
import { useColorMode } from "@/theme/ThemeProvider";

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();

  return (
    <Button 
        variant="contained" 
        onClick={toggleColorMode}>
      Toggle Theme
    </Button>
  );
}
