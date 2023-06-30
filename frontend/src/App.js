import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./pages/home/Home";

const theme = createTheme({
  palette: {
    primary: { main: "#5BC18F" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
