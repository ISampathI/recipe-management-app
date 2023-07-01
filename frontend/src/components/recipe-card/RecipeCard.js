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
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../../redux/actions/recipeActions";

// RecipeCard component for rendering a card with recipe information
function RecipeCard({ onClickEdit, onClickDelete, data }) {
  const recipe = useSelector((state) => state.selectedRecipe); // Retrieve recipes from the Redux store
  const dispatch = useDispatch();

  return (
    <Grid item xxs={10} sm={6} md={4} lg={3}>
      <Card
        onClick={() => {
          dispatch(selectRecipe(data));
        }}
        sx={{
          p: "10px",
          px: "5px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to="/view" style={{ all: "unset", cursor: "pointer" }}>
          <CardMedia
            component="img"
            height="150px"
            image={recipeImg}
            sx={{ objectFit: "contain" }}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description.slice(0, 150)}...
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing sx={{ mt: "auto" }}>
          <Link to="/edit" style={{ textDecoration: "none" }}>
            <IconButton onClick={onClickEdit}>
              <EditNoteIcon></EditNoteIcon>
            </IconButton>
          </Link>
          <IconButton
            onClick={() => {
              console.log("sss", data._id);
              onClickDelete(data._id);
            }}
          >
            <DeleteOutlineIcon sx={{ color: "error.main" }}></DeleteOutlineIcon>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default RecipeCard;
