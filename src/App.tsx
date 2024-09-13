import {
  AppBar,
  Box,
  Button,
  Grid2,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import "./App.css";
import { Menu } from "@mui/icons-material";

function App() {
  return (
    <AppBar style={{ width: "100%", padding: "0.5rem" }} position="static">
      <Grid2
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2 size={4}>
          <Typography variant="h6" color="inherit" component="div">
            Team A
          </Typography>
        </Grid2>
        <Grid2 size={8} style={{ textAlign: "end" }}>
          <Button variant="outlined" color="secondary">
            Add Todo
          </Button>
        </Grid2>
      </Grid2>
    </AppBar>
  );
}

export default App;
