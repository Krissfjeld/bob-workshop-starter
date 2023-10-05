import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#f4f4f4"
      borderRadius={9}
      boxShadow={13}
      spacing={2}
    >
      <Avatar
        src="/DSC_1248.JPG"
        alt="Blomst"
        sx={{
          width: 450,
          height: 450,
          margin: "auto",
          border: "4px solid #3f51b5",
        }}
      />
      <Typography variant="h4" gutterBottom color="#3f51b5">
        Elsa
  
      </Typography>
    </Stack>
  );
}

export default Profile;
