import React, { useState } from "react";
import { AppBar, Box, Button, Grid2, Typography } from "@mui/material";
import TodoCard from "./components/ConfigureTodo";
import WorkspaceArea from "./components/WorkspaceArea";
import ConfigureGroup from "./components/ConfigureGroup";

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [cbInd, setCbInd] = useState(false);
  const [openGrpDialog, setOpenGrpDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseCb = () => {
    setCbInd((prevState) => !prevState);
  };

  const handleCloseGroup = () => {
    setOpenGrpDialog(false);
    handleCloseCb();
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
                marginRight: "0.5rem",
              }}
              onClick={() => setOpenGrpDialog(true)}
            >
              Add Group
            </Button>

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
      <Box
        mt={2}
        pl={3}
        pr={3}
        sx={{ backgroundColor: "#FFFFFF" }}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <WorkspaceArea
          cbInd={cbInd}
          openDialog={openDialog}
          handleCloseCb={handleCloseCb}
        />
      </Box>
      <TodoCard
        open={openDialog}
        onClose={handleCloseDialog}
        isEditMode={false}
      />

      <ConfigureGroup
        open={openGrpDialog}
        onClose={handleCloseGroup}
        isEditMode={false}
      />
    </React.Fragment>
  );
}

export default App;
