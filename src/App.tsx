import React, { useState } from 'react';   
import {
  AppBar,
  Button,
  Grid2,
  Typography,
} from "@mui/material";
import TodoCard from "./components/TodoCard";

import { WidthFull } from '@mui/icons-material';
import WorkspaceArea from './components/WorkspaceArea';

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
            <Button variant="outlined" color="secondary" onClick={handleOpenDialog}>
              Add Todo
            </Button>
          </Grid2>
        </Grid2>
      </AppBar>
      <Grid2 container width={'100%'} bgcolor={'#FFFFFF'} height={'100vh'}>
          <WorkspaceArea/>
      </Grid2>
      <div style={{width: '200px', height: '200px', backgroundColor: 'red'}}></div>
      <TodoCard open={openDialog} onClose={handleCloseDialog} />   
    </React.Fragment>
  );
}

export default App;
