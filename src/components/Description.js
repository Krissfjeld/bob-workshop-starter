import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#lightblue" borderRadius={50} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Om Meg
      </Typography>
      <Typography>
        Hei! Jeg heter Elsa! 

      </Typography>
    </Box>
  );
}

export default Description;
