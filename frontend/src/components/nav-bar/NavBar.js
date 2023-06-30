import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SyncIcon from "@mui/icons-material/Sync";

function NavBar() {
  return (
    <AppBar color="background" elevation="0" position="static">
      <Toolbar>
        <LunchDiningIcon
          fontSize="large"
          sx={{ color: "primary.main" }}
        ></LunchDiningIcon>
        <Typography
          fontWeight="bold"
          fontSize="large"
          sx={{ ml: "5px", mt: "3px", mr: "auto" }}
        >
          ReciSave
        </Typography>
        <IconButton>
          <SyncIcon></SyncIcon>
        </IconButton>
        <Button variant="contained" size="small" sx={{ color: "white" }}>
          Add a recipe
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
