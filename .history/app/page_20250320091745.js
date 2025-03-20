import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {

  
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
