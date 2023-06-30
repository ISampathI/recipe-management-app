import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewRecipe from "./pages/new-recipe/NewRecipe";

const theme = createTheme({
  palette: {
    primary: { main: "#5BC18F" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<NewRecipe />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
