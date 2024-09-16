import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { IconButton, TextField, Card, CardContent, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
  const [formValues, setFormValues] = React.useState<{
    id:number;
    taskName: string;
    description: string;
    footerAction: string;
    section: string;
    pickAvatar: string;
  }>({
    id:0,//set logic
    taskName: '',
    description: '',
    footerAction: '',
    section: '',
    pickAvatar: '',
  });

  
  const [cards, setCards] = React.useState<
    { id:number, taskName: string; description: string; footerAction: string; section: string; pickAvatar: string }[]
  >([]);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name!]: value,
    }));
  };

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValues.taskName.trim()) {
      console.error('Task Name is required');
      return;
    }
    
    if (!formValues.description.trim()) {
      console.error('Description is required');
      return;
    }

    
    setCards([...cards, { ...formValues }]);

    setFormValues({
      id:0,//check
      taskName: '',
      description: '',
      footerAction: '',
      section: '',
      pickAvatar: '',
    });

    onClose();
  };

  return (
    <div>
      {/* To-Do Card Creation Dialog */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xs"
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
          // sx: {
          //   display: 'flex',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   minWidth: 'xs', // Applies the minimum width to the dialog
          //   p: 2, // Optional padding for better spacing inside the dialog
          // },
          sx: {
            width: '90%',
            minWidth:'300px',
            maxWidth: '400px',
            padding: 2, 
            alignItems: 'center', 
          },
        }}
      >
        <DialogTitle>
          Add Note
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <>
            <TextField
              onChange={handleChange}
              value={formValues.taskName}
              autoFocus
              required
              margin="dense"
              id="task-name"
              name="taskName"
              label="Task Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              value={formValues.description}
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              value={formValues.footerAction}
              required
              margin="dense"
              id="footer-action"
              name="footerAction"
              label="Footer Action"
              type="text"
              fullWidth
              variant="standard"
              // slotProps={{
              //   inputLabel: {
              //     sx: {
              //       paddingLeft: '15px', 
              //     },
              //   },
              // }}
            />
            <FormControl fullWidth margin="dense">
              <InputLabel id="section-label">Section</InputLabel>
              <Select
                labelId="section-label"
                id="section"
                name="section"
                value={formValues.section}
                onChange={handleChange}
                variant="standard"
                // MenuProps={}
              >
                <MenuItem value="Section 1">Section 1</MenuItem>
                <MenuItem value="Section 2">Section 2</MenuItem>
                <MenuItem value="Section 3">Section 3</MenuItem>
                <MenuItem value="Section 4">Section 4</MenuItem>
                <MenuItem value="Section 5">Section 5</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel id="Avatar-label">Pick Avatar</InputLabel>
              <Select
            labelId="Avatar-label"
            id="pick-avatar"
            name="Pick Avatar"
            value={formValues.pickAvatar}
            onChange={handleChange}
            variant="standard"
            fullWidth
            placeholder='Pick Avatar'
            >
              <MenuItem value="Section">Section 1</MenuItem>
            </Select>
            </FormControl>
            
          </>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Render To-Do Cards */}
      {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: 250,
              background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
              color: '#fff',
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                {card.taskName}
              </Typography>
              <Typography variant="body2">Description: {card.description}</Typography>
              <Typography variant="body2">Avatar: {card.pickAvatar}</Typography>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  );
}
