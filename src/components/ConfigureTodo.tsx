import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  IconButton,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AvatarLookups, sectionLookups } from "../constants/constants";
import { Section } from "../types/type";

interface TodoCardProps {
  open: boolean;
  onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FormState {
  avatar: string;
  content: string;
  dateTime: string;
  id: number;
  section: number;
  title: string;
  sectionName: string;
}

const initState = {
  id: new Date().getTime(),
  title: "",
  content: "",
  section: 0,
  avatar: "",
  dateTime: new Date().toString(),
  sectionName: "",
};

export default function TodoCard({ open, onClose }: TodoCardProps) {
  const [formValues, setFormValues] = React.useState<FormState>(initState);
  const sections = sectionLookups;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSectionSelection = (section: any) => {
    setFormValues({
      ...formValues,
      sectionName: section.name,
      section: section?.sectionId,
    });
  };

  const handleSubmit = () => {
    let data: any = localStorage.getItem("columnsData") || "{}";
    data = JSON.parse(data) || null;
    let tempData = [...data];

    let targetSection = tempData.find(
      (sec: Section) => sec.sectionId === formValues.section
    );

    let targetIndex = tempData.findIndex(
      (sec: Section) => sec.sectionId === formValues.section
    );
    targetSection?.cards.push(formValues);
    tempData[targetIndex] = targetSection;
    console.log(tempData, "[final temp data]");
    localStorage.setItem("columnsData", JSON.stringify(tempData));
    onClose(); // Close the dialog
    setFormValues(initState);
  };

  console.log("formvalues: ", formValues);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
      >
        <DialogTitle>
          Add Note
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <>
            <TextField
              onChange={handleChange}
              value={formValues.title}
              autoFocus
              required
              margin="dense"
              id="task-name"
              name="title"
              label="Task Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              value={formValues.content}
              required
              margin="dense"
              id="description"
              name="content"
              label="Description"
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
                variant="standard"
                required
              >
                {sections.map((section) => {
                  return (
                    <MenuItem
                      key={section.name}
                      value={section.sectionId}
                      onClick={() => handleSectionSelection(section)}
                    >
                      {section.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel id="Avatar-label">Pick Avatar</InputLabel>
              <Select
                labelId="Avatar-label"
                id="pick-avatar"
                name="avatar"
                value={formValues.avatar}
                onChange={handleChange}
                variant="standard"
                fullWidth
              >
                {AvatarLookups.filter(
                  (ele) => ele.category === formValues.section
                ).map((avatar) => (
                  <MenuItem key={avatar.name} value={avatar.img}>
                    <img
                      alt={avatar.name}
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
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
