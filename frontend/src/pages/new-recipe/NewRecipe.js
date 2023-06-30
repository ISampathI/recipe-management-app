import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.png";

function NewRecipe() {
  return (
    <Box width="100vw" height="100vh" bgcolor="#F5F7F7" position="relative">
      <NavBar nav />
      <Box width="100wh" height="calc(100vh - 4rem)" overflow="auto" pb={10}>
        <Box
          sx={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "150px",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            width="100%"
            height="100%"
            position="absolute"
            bgcolor="rgba(0, 0, 0, 0.46)"
          ></Box>
          <Stack
            px={10}
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2" zIndex="1" color="white">
              ADD NEW RECIPE
            </Typography>
          </Stack>
        </Box>
        <Container>
          <Box
            justifyContent="center"
            display="flex"
            width="100%"
            height="fit-content"
          >
            <Box width="60%" height="100%" bgcolor="white" p={5} pt={0}>
              <Stack direction="column">
                <Typography variant="body1" pt={5}>
                  Recipe Name
                </Typography>
                <TextField
                  hiddenLabel
                  variant="outlined"
                  id="recipeName"
                  size="small"
                ></TextField>
                <Typography variant="body1" pt={5}>
                  Ingredients
                </Typography>
                <TextField
                  hiddenLabel
                  variant="outlined"
                  id="recipeIngredients"
                  size="small"
                ></TextField>
                <Typography variant="body1" pt={5}>
                  Description
                </Typography>
                <TextField
                  hiddenLabel
                  multiline
                  id="recipeDescription"
                  variant="outlined"
                  size="small"
                  rows={10}
                ></TextField>
                <Button variant="contained" sx={{ mt: 5, color: "white" }}>
                  SAVE
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default NewRecipe;
