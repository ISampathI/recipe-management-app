import {
  AppBar,
  Button,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SyncIcon from "@mui/icons-material/Sync";

function NavBar({ nav = false }) {
  return (
    <AppBar color="background" elevation="0" position="static">
      <Toolbar>
        <Link component="span" style={{ textDecoration: "none", cursor:"pointer" }}>
          <Stack direction="row">
            <LunchDiningIcon
              fontSize="large"
              sx={{ color: "primary.main" }}
            ></LunchDiningIcon>
            <Typography
              fontWeight="bold"
              fontSize="large"
              color="text.primary"
              sx={{ ml: "5px", mt:"6px" }}
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
            <Button
              variant="contained"
              size="small"
              sx={{ color: "white" }}
            >
              Add a recipe
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
