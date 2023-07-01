import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.png";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import ConfirmDialog from "../../components/confirm-dialog/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import { API_ADDRESS } from "../../utils/helpers";
import axios from "axios";
import { setRecipes } from "../../redux/actions/recipeActions";

function Home() {
  const [openDelModal, setOpenDelModal] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState(false);

  const recipes = useSelector((state) => state.recipes);
  const recipe = useSelector((state) => state.selectedRecipe);
  const dispatch = useDispatch();

  const setGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreetingMessage("MORNING");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetingMessage("AFTERNOON");
    } else if (currentHour >= 18 && currentHour < 22) {
      setGreetingMessage("EVENING");
    } else {
      setGreetingMessage("NIGHT");
    }
  };

  const getRecipes = async () => {
    await axios
      .get(`${API_ADDRESS}/recipes`)
      .then((res) => {
        dispatch(setRecipes(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setGreeting();
    getRecipes();
  }, []);

  const handleDelete = async () => {
    let id = recipe._id;
    await axios
      .delete(`${API_ADDRESS}/recipes/${id}`)
      .then((res) => {
        console.log(res);
        getRecipes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box width="100vw" height="100vh" bgcolor="#F5F7F7" position="relative">
      <NavBar></NavBar>
      <Box width="100wh" height="calc(100vh - 4rem)" overflow="auto" pb={10}>
        <Box
          sx={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "200px",
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
            direction="column"
            position="relative"
          >
            <Typography textAlign="center" variant="h2" color="white" fontWeight="bold">
              {`HI GOOD ${greetingMessage}`}
            </Typography>
            <Typography variant="body1" color="white">
              Total recipies: {recipes?.length || 0}
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ pt: "40px" }}>
          <Grid container spacing={5}>
            {recipes.map((recipe, index) => {
              return (
                <RecipeCard
                  key={index}
                  onClickDelete={() => {
                    setOpenDelModal(true);
                  }}
                  data={recipe}
                ></RecipeCard>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <ConfirmDialog
        open={openDelModal}
        onClose={() => setOpenDelModal(false)}
        onConfirm={handleDelete}
      ></ConfirmDialog>
    </Box>
  );
}

export default Home;
