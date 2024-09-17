import React, { useState } from "react";
import { AppBar, Button, Grid2, Typography } from "@mui/material";
import TodoCard from "./components/ConfigureTodo";
import WorkspaceArea from "./components/WorkspaceArea";

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <React.Fragment>
      <AppBar
        style={{
          width: "100%",
        }}
        position="static"
      >
        <Grid2
          container
          style={{
            width: "100%",
            padding: "0.5rem",
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          }}
        >
          <Grid2 size={4}>
            <Typography variant="h6" color="inherit" component="div">
              Team A
            </Typography>
          </Grid2>
          <Grid2 size={8} style={{ textAlign: "end" }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#003366" /* Border color */,
                color: "#003366" /* Text color */,
                "&:hover": {
                  borderColor: "#001f3f" /* Darker border on hover */,
                  backgroundColor: "#e6f0ff" /* Light background on hover */,
                },
              }}
              onClick={handleOpenDialog}
            >
              Add Note
            </Button>
          </Grid2>
        </Grid2>
      </AppBar>
      <Grid2 container width={"100%"} bgcolor={"#FFFFFF"} height={"100vh"}>
        <WorkspaceArea openDialog={openDialog} />
      </Grid2>
      <TodoCard open={openDialog} onClose={handleCloseDialog} />
    </React.Fragment>
  );
}

export default App;
