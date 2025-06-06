"use client";
import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import ThemeToggleButton from "@/components/general/ToggleThemeButton";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      minHeight="100vh"
      sx={{
        backgroundColor: theme.palette.background.default,
        transition: "background-color 0.3s ease-in-out",
        padding: 0,
        margin: 0,
      }}
    >
      <Stack width={300} p={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          disabled
        >
          next.js boiler plate
        </Button>

        <Stack my={3} spacing={1}>
          <Typography variant="h5" color="text.primary">
            primary text
          </Typography>
          <Typography color="text.secondary">secondary text</Typography>
        </Stack>

        <ThemeToggleButton />
      </Stack>
    </Box>
  );
}
