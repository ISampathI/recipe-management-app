import {
  Alert,
  Box,
  Container,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.png";
import RecipeDataForm from "../../components/recipe-data-form/RecipeDataForm";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_ADDRESS } from "../../utils/helpers";
import SnackBar from "../../components/snack-bar/SnackBar";

function EditRecipe() {
  const recipe = useSelector((state) => state.selectedRecipe);
  const dispatch = useDispatch();

  const [snackBarOpen, setSnackBarOpen] = useState({
    status: false,
    message: "Ok",
    severity: "success",
  });

  const handleSubmit = async (formData) => {
    let id = recipe._id;
    await axios
      .put(`${API_ADDRESS}/recipes/${id}`, formData)
      .then((res) => {
        console.log(res);
        setSnackBarOpen({
          message: "Successfully updated!",
          severity: "success",
          status: true,
        });
      })
      .catch((error) => {
        setSnackBarOpen({
          message: "Update failed!",
          severity: "error",
          status: true,
        });
        console.log(error);
      });
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
              EDIT THE RECIPE
            </Typography>
          </Stack>
        </Box>
        <Container>
          <RecipeDataForm
            onSubmit={handleSubmit}
            btnName="UPDATE"
            data={recipe}
          ></RecipeDataForm>
        </Container>
      </Box>
      <SnackBar
        onClose={() => {
          setSnackBarOpen((prevState) => ({
            ...prevState,
            status: false,
          }));
        }}
        severity={snackBarOpen.severity}
        open={snackBarOpen.status}
        message={snackBarOpen.message}
      ></SnackBar>
    </Box>
  );
}

export default EditRecipe;
