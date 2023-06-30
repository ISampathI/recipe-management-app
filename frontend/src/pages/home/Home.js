import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../components/nav-bar/NavBar";

function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      bgcolor="#F5F7F7"
      position="relative"
    >
        <NavBar></NavBar>
    </Box>
  );
}

export default Home;
