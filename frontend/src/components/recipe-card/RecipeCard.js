import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import recipeImg from "../../assets/img/recipe.png";
import { Link } from "react-router-dom";

function RecipeCard({ onClickEdit, onClickDelete }) {
  return (
    <Grid item xs={6} md={4} lg={3}>
      <Card sx={{ p: "10px", px: "5px" }}>
        <CardMedia
          component="img"
          height="150px"
          image={recipeImg}
          sx={{ objectFit: "contain" }}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/edit">
            <IconButton onClick={onClickEdit}>
              <EditNoteIcon></EditNoteIcon>
            </IconButton>
          </Link>
          <IconButton onClick={onClickDelete}>
            <DeleteOutlineIcon sx={{ color: "error.main" }}></DeleteOutlineIcon>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default RecipeCard;
