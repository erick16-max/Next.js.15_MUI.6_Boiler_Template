import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { LIGHT_MODE } from "@/constants";

export default function Home() {

  // choose btween dark and light theme
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === LIGHT_MODE
        ?
        :{
          primary: {
            light: "#5d898f",
            main: "#487a81",
            dark: "#013840",
          },
          secondary: {
            main: '#eeeeee'
          },
          background: {
            default: '#1c1e21',
            paper: '#1c1e21',
          },
          text: {
            primary: grey[200],
            secondary: grey[400],
          },
          success: {
            main: '#26c3a6',
          },
          divider: '#242526',
        }),
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
