"use client"
import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import ThemeToggleButton from "@/components/general/ToggleThemeButton";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      
      
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.getContrastText(theme.palette.primary.main),
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        next.js boiler plate
      </Button>

      <Stack my={3} spacing={1}>
        <Typography variant="h5" color="text.primary">
          primary text
        </Typography>
        <Typography color="text.secondary">
          secondary text
        </Typography>
      </Stack>

      <ThemeToggleButton />
    </Box>
  );
}
