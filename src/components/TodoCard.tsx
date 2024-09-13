import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField } from '@mui/material';

interface TodoCardProps {
  open: boolean;           
  onClose: () => void;     
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TodoCard({ open, onClose }: TodoCardProps) {
  return (
    <Dialog
      open={open}             
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}       
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          onClose();             
        },
      }}
    >
      <DialogTitle>Add ToDo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the name of the task.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="Task-Name"
          name="Task Name"
          label="Task Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id=""
          name="Name"
          label="Task Name"
          type="text"
          fullWidth
          variant="standard"
        />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
