import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SyncIcon from "@mui/icons-material/Sync";
import { Link } from "react-router-dom";

function NavBar({ nav = false }) {
  return (
    <AppBar color="background" elevation="0" position="static">
      <Toolbar>
        <Link style={{ textDecoration: "none" }} to="/">
          <Stack direction="row">
            <LunchDiningIcon
              fontSize="large"
              sx={{ color: "primary.main" }}
            ></LunchDiningIcon>
            <Typography
              fontWeight="bold"
              fontSize="large"
              color="text.primary"
              sx={{ ml: "5px", mt: "6px" }}
            >
              ReciSave
            </Typography>
          </Stack>
        </Link>
        {!nav && (
          <>
            <IconButton sx={{ ml: "auto" }}>
              <SyncIcon></SyncIcon>
            </IconButton>
            <Link style={{ textDecoration: "none" }} to="/add">
              <Button variant="contained" size="small" sx={{ color: "white" }}>
                Add a recipe
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
