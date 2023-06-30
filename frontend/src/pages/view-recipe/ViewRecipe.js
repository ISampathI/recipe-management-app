import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.png";

function ViewRecipe() {
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
            LET'S COOK
            </Typography>
          </Stack>
        </Box>
        <Container>
          <Box justifyContent="center" display="flex" width="100%">
            <Box width="60%" height="100%" bgcolor="white" p={5} pt={0}>
              <Stack direction="column">
                <Typography variant="body1" pt={5}>
                  Recipe Name
                </Typography>
                <Typography variant="body2">Spaghetti Bolognese</Typography>
                <Typography variant="body1" pt={5}>
                  Ingredients
                </Typography>

                <List sx={{ p: 0 }}>
                  {"Ground beef, onion, garlic, tomato sauce, tomato paste, spaghetti, olive oil, salt, pepper, grated Parmesan cheese"
                    .split(",")
                    .map((item) => (
                      <ListItem key={item} sx={{ m: 0, p: 0 }}>
                        <Typography variant="body2">
                          - Line item {item}
                        </Typography>
                      </ListItem>
                    ))}
                </List>

                <Typography variant="body1" pt={5}>
                  Description
                </Typography>
                <Typography variant="body2">
                  Classic Italian dish with rich meaty sauce. Brown ground beef
                  with onion and garlic in olive oil. Add tomato sauce and
                  paste, simmer for 20 minutes. Cook spaghetti separately and
                  toss with the sauce. Serve hot, topped with grated Parmesan
                  cheese.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ViewRecipe;
