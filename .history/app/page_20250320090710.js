import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <Button variant="contained">next.js boiler plate</Button>
      <Stack>
        <Typography>primary text</Typography>
        <Typography>primary text</Typography>
      </Stack>
    </Box>
  );
}
