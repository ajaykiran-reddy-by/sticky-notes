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
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { sizeOptions } from "../constants/constants";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface ConfigureGroupProps {
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

const initState = {
  id: new Date().getTime(),
  size: "",
  title: "",
};

export default function ConfigureGroup({
  open,
  onClose,
  formData,
  isEditMode,
}: ConfigureGroupProps) {
  const [formValues, setFormValues] = React.useState<any>(initState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
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
    console.log(tempData, "[tempData]");
    tempData.push({
      cards: [],
      sectionColor: "#f5425a",
      sectionId: data.length + 1,
      sectionName: formValues.title,
      size: formValues.size,
    });
    localStorage.setItem("columnsData", JSON.stringify(tempData));
    onClose();
  };

  function getDisabledStatus() {
    return !formValues.title || !formValues.size;
  }

  return (
    <Box>
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
          {isEditMode ? `Edit ${formValues.title}` : " Add Group"}

          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div style={{ overflowX: "hidden" }}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <TextField
                onChange={handleChange}
                value={formValues.content}
                required
                margin="dense"
                id="title"
                name="title"
                label="Title"
                type="text"
                fullWidth
                variant="standard"
                placeholder="Enter title"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <>
                <InputLabel required>Size</InputLabel>
                <Select
                  labelId="size-label"
                  id="size"
                  name="size"
                  value={formValues.size}
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                >
                  {sizeOptions.map((option) => {
                    return (
                      <MenuItem key={option.title} value={option.value}>
                        {option.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </>
            </motion.div>
          </div>
        </DialogContent>
        <DialogActions>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Button
              disabled={getDisabledStatus()}
              onClick={handleSubmit}
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </motion.div>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
