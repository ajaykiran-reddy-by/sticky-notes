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
import Column from './WorkspaceArea';
interface TodoCardProps {
  open: boolean;
  onClose: () => void;
  columns: typeof Column[];
  setColumns: React.Dispatch<React.SetStateAction<typeof Column[]>>;
}


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TodoCard({ open, onClose, columns, setColumns }: TodoCardProps) {
  const [formValues, setFormValues] = React.useState<{
    colId:number,
    id: number;
    taskName: string;
    description: string;
    footerAction: string;
    section: string;
    pickAvatar: string;
  }>({
    colId: 0,//initializing it, not mapped yet
    id: 0,
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
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const { colId, taskName, description, section, pickAvatar } = formValues;

    // Create the new card object
    const newCard = {
      id: Date.now(), // this id logic must be changed 
      title: taskName,
      content: description,
      icon: pickAvatar,
      dateTime: new Date(),
      color: sections.find((sec) => sec.value === section)?.color,
      section: colId,
    };

    // Update the columns with the new card
    const updatedColumns = columns.map((column) => {
      if (column.colId === colId) {
        return {
          ...column,
          cards: [...column.cards, newCard],
        };
      }
      return column;
    });

    // Update the state in the parent component (`WorkspaceArea.tsx`)
    setColumns(updatedColumns);

    // Clear the form values after submission
    setFormValues({
      colId: 0,
      id: 0,
      taskName: '',
      description: '',
      footerAction: '',
      section: '',
      pickAvatar: '',
    });

    onClose(); // Close the dialog
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
            {/* <TextField
              onChange={handleChange}
              value={formValues.footerAction}
              margin="dense"
              id="footer-action"
              name="footerAction"
              label="Footer Action"
              type="text"
              fullWidth
              variant="standard"
            /> */}
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
