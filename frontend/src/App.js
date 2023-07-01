import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewRecipe from "./pages/new-recipe/NewRecipe";
import EditRecipe from "./pages/edit-recipe/EditRecipe";
import ViewRecipe from "./pages/view-recipe/ViewRecipe";

const theme = createTheme({
  palette: {
    primary: { main: "#5BC18F" },
  },
  breakpoints: {
    values: { xxs: 0, xs: 450, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<NewRecipe />}></Route>
          <Route path="/edit" element={<EditRecipe />}></Route>
          <Route path="/view" element={<ViewRecipe />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
