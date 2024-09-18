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
import { useEffect, useState } from "react";

interface TodoCardProps {
  open: boolean;
  onClose: () => void;
  isEditMode: boolean;
  formData?: any;
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

export default function TodoCard({
  open,
  onClose,
  formData,
  isEditMode,
}: TodoCardProps) {
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

  useEffect(() => {
    if (formData) {
      setFormValues(formData);
    }
  }, [formData]);
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
    if (isEditMode) {
      const cards = tempData[targetIndex].cards;
      const targetCardIndex = cards.findIndex(
        (card: any) => card.id === formValues.id
      );
      cards[targetCardIndex] = formValues;
    } else {
      targetSection?.cards.push(formValues);
      tempData[targetIndex] = targetSection;
    }

    localStorage.setItem("columnsData", JSON.stringify(tempData));
    onClose();
    setFormValues(initState);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        {isEditMode ? `Edit ${formValues.title}` : " Add Note"}

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
            placeholder="Enter task name"
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
            placeholder="Enter task description"
          />
          <>
            <InputLabel required>Section</InputLabel>
            <Select
              labelId="section-label"
              id="section"
              name="section"
              value={formValues.section}
              variant="standard"
              fullWidth
            >
              {sections.map((section) => {
                return (
                  <MenuItem
                    key={section.name}
                    value={section.sectionId}
                    onClick={() => handleSectionSelection(section)}
                    // style={{ color: section.color, fontWeight: "bold" }}
                  >
                    {section.name}
                  </MenuItem>
                );
              })}
            </Select>
          </>
          <>
            <InputLabel required id="Avatar-label">
              Pick Avatar
            </InputLabel>
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
          </>
        </>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
