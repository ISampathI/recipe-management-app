import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// RecipeDataForm component for rendering a form to input recipe data
function RecipeDataForm({ onSubmit, btnName = "SAVE", data = {} }) {
  // Set initial form values based on the data object
  const [formValues, setFormValues] = useState(data);

  // Handle change event for input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box justifyContent="center" display="flex" width="100%">
        <Box
          width={{ xxs: "100%", xs: "90%", md: "60%" }}
          height="100%"
          bgcolor="white"
          p={5}
          pt={0}
        >
          <Stack direction="column">
            <Typography variant="body1" pt={5}>
              Recipe Name
            </Typography>
            <TextField
              hiddenLabel
              variant="outlined"
              id="recipeName"
              size="small"
              name="name"
              value={formValues["name"] || ""}
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
              name="ingredients"
              value={formValues["ingredients"] || ""}
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
              name="description"
              value={formValues["description"] || ""}
              onChange={handleChange}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 5, color: "white" }}
            >
              {btnName}
            </Button>
          </Stack>
        </Box>
      </Box>
    </form>
  );
}

export default RecipeDataForm;
