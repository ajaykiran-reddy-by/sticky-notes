import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { IconButton, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AvatarLookups, sectionLookups } from '../constants/constants';
import Card, { initialColumnsData } from './WorkspaceArea';
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
    id: number;
    taskName: string;
    description: string;
    footerAction: string;
    section: string;
    pickAvatar: string;
  }>({
    id: 0, // ID will be set on submit
    taskName: '',
    description: '',
    footerAction: '',
    section: '',
    pickAvatar: '',
  });
  const sections=sectionLookups;

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name!]: value,
    }));
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   // {
  //   //   colName: 'To Do',
  //   //   colId: 1,
  //   //   cards: [
  //   //     {
  //   //       id: 1,
  //   //       title: 'Task 1',
  //   //       content: 'This is task 1 content.',
  //   //       icon: '📝',
  //   //       dateTime: new Date(),
  //   //       color: '#4285f4',
  //   //       section: 1,
  //   // //     },
  //   //     {
  //   //       id: 2,
  //   //       title: 'Task 2',
  //   //       content: 'This is task 2 content.',
  //   //       icon: '📅',
  //   //       dateTime: new Date(),
  //   //       color: '#4285f4',
  //   //       section: 1,
  //   //     },
  //   //   ],
  //   // },

  //   const newCard: Card = {
  //     id: Date.now(), // Using timestamp for a unique ID
  //     title: formValues.taskName,
  //     content: formValues.description,
  //     icon: formValues.pickAvatar,
  //     dateTime: new Date(),
  //     color: '#4285f4', // Default color, can be modified based on the section
  //     section: parseInt(formValues.section, 10),
  // };

  //   setFormValues({
  //     id: 0,
  //     taskName: '',
  //     description: '',
  //     footerAction: '',
  //     section: '',
  //     pickAvatar: '',
  //   });


  //   onClose();
  // };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Extract values from form state
    const { taskName, description, pickAvatar, section } = formValues;

    if (!taskName || !description) {
        // Optionally handle validation errors here
        return;
    }

    // Find the column to which the new card will be added
    const columnToUpdate = initialColumnsData.find(column => column.colId === parseInt(section, 10));

    if (!columnToUpdate) {
        // Handle case where section is invalid or not found
        return;
    }

    // Generate a new unique ID based on existing cards
    const newId = columnToUpdate.cards.length > 0 
        ? Math.max(...columnToUpdate.cards.map(card => card.id)) + 1 
        : 1;

    // Create the new card
    const newCard = {
        id: newId,
        title: taskName,
        content: description,
        icon: pickAvatar, // Assuming this is an emoji or icon string
        dateTime: new Date(),
        color: '#4285f4', // You can customize this or pass it through form values
        section: parseInt(section, 10),
    };

    // Add the new card to the appropriate column's cards array
    columnToUpdate.cards = [...columnToUpdate.cards, newCard];
    console.log('newCard: ',newCard)

    // Reset form values
    setFormValues({
        id: 0,
        taskName: '',
        description: '',
        footerAction: '',
        section: '',
        pickAvatar: '',
    });

    // Close the form/modal/dialog
    onClose();
};


  
console.log('formvalues: ',formValues)
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xs"
        PaperProps={{
          component: 'form',
          onSubmit: {handleSubmit},
          sx: {
            width: '90%',
            minWidth: '300px',
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
              margin="dense"
              id="footer-action"
              name="footerAction"
              label="Footer Action"
              type="text"
              fullWidth
              variant="standard"
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
                required
              >
                {sections.map((section)=>{
                  return <MenuItem key={section.name} value={section.value}>{section.name}</MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel id="Avatar-label">Pick Avatar</InputLabel>
              <Select
                labelId="Avatar-label"
                id="pick-avatar"
                name="pickAvatar"
                value={formValues.pickAvatar} 
                onChange={handleChange}
                variant="standard"
                fullWidth
              >
                {AvatarLookups.filter(ele=>ele.category===formValues.section).map((avatar) => (
                <MenuItem key={avatar.name} value={avatar.name}>
                  <img 
                    src={avatar.img} 
                    style={{ width: 24, height: 24, marginRight: 8 }} 
                  />
                  {avatar.name}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
          </>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
