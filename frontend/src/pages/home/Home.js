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

function Home() {
  const [openDelModal, setOpenDelModal] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState(false);

  const setGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreetingMessage("Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetingMessage("Afternoon");
    } else if (currentHour >= 18 && currentHour < 22) {
      setGreetingMessage("Evening");
    } else {
      setGreetingMessage("Night");
    }
  };

  useEffect(() => {
    setGreeting();
  }, []);

  const handleDelete = () => {
    console.log("Recipe deleted!");
  };

  const handleOnClickEdit = () => {
    setOpenDelModal(true);
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
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            position="relative"
          >
            <Typography variant="h2" color="white" fontWeight="bold">
              {`HI GOOD ${greetingMessage}`}
            </Typography>
            <Typography variant="body1" color="white">
              Total recipies: 10
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ pt: "40px" }}>
          <Grid container spacing={5}>
            <RecipeCard onClickDelete={handleOnClickEdit}></RecipeCard>
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
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
