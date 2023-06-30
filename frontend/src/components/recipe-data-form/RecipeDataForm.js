import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function RecipeDataForm({ onSubmit, btnName = "SAVE" }) {
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
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
              name="recipeName"
              value={formValues["recipeName"] || ""}
              onChange={handleChange}
            ></TextField>
            <Typography variant="body1" pt={5}>
              Ingredients
            </Typography>
            <TextField
              hiddenLabel
              variant="outlined"
              id="recipeIngredients"
              size="small"
              name="recipeIngredients"
              value={formValues["recipeIngredients"] || ""}
              onChange={handleChange}
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
              name="recipeDescription"
              value={formValues["recipeDescription"] || ""}
              onChange={handleChange}
            ></TextField>
            <Button type="submit" variant="contained" sx={{ mt: 5, color: "white" }}>
              {btnName}
            </Button>
          </Stack>
        </Box>
      </Box>
    </form>
  );
}

export default RecipeDataForm;
