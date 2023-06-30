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
import RecipeDataForm from "../../components/recipe-data-form/RecipeDataForm";

function NewRecipe() {
  const handleSubmit = (formData) => {
    console.log(formData);
  };
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
          <RecipeDataForm onSubmit={handleSubmit}></RecipeDataForm>
        </Container>
      </Box>
    </Box>
  );
}

export default NewRecipe;
