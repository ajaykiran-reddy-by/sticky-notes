import { Card, CardContent, Grid2, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ConfigureTodo from "./ConfigureTodo";
import { motion } from "framer-motion";
const TaskCard = ({
  id,
  title,
  content,
  avatar,
  dateTime,
  color,
  section,
  // containerRef,
  handleDragStart,
  handleDragEnd,
  handleCloseCb,
}: {
  id: number;
  title: string;
  content: string;
  avatar: string;
  dateTime: Date | string;
  color: string;
  section: string;
  // containerRef: HTMLDivElement | null;
  handleDragStart: Function;
  handleDragEnd: Function;
  handleCloseCb: Function;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    handleCloseCb(true);
  };

  const handleEditCard = (data: any) => {
    setOpenDialog(true);
    setSelectedCard(data);
  };

  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <ConfigureTodo
          open={openDialog}
          onClose={handleCloseDialog}
          isEditMode
          formData={selectedCard}
        />
        <Card
          draggable
          onDragStart={(e: any) => handleDragStart(e, id)}
          onDragEnd={() => handleDragEnd()}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "15px",
            boxShadow: isDragging ? "6px 6px" : "none",
            border: "1px solid #020202",
            borderRight: "none",
            padding: "10px",
            position: "relative",
            overflow: "visible",
            backgroundColor: "#fff",
            maxWidth: "80%",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <CardContent
            sx={{ flexGrow: 1, padding: "1rem", marginRight: "1rem" }}
          >
            <Grid2 container>
              <Grid2>
                <img
                  src={avatar}
                  alt={title}
                  style={{
                    height: "30px",
                    width: "30px",
                    paddingRight: "0.2rem",
                  }}
                />
              </Grid2>
              <Grid2>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {title}
                </Typography>
              </Grid2>
            </Grid2>
            <Typography variant="body2" sx={{ marginBottom: "8px" }}>
              {content}
            </Typography>
            <div
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="caption" color="primary">
                {new Date(dateTime).toLocaleDateString("en-GB")}
              </Typography>
              <Typography variant="caption" color="primary">
                {new Date(dateTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </div>
            {/* <Grid2 size={2} style={{ backgroundColor: color }}></Grid2> */}
          </CardContent>

          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "15%",
              height: "100%",
              backgroundColor: color,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
              borderRight: "1px solid black",
              borderTop: "0.25px solid black",
              borderBottom: "0.5px solid black",
            }}
          />
          {isHovering && (
            <Tooltip title="Edit">
              <EditIcon
                style={{
                  position: "absolute",
                  top: "80px",
                  right: "1px",
                  zIndex: 1,
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleEditCard({
                    id,
                    title,
                    content,
                    avatar,
                    dateTime,
                    color,
                    section,
                  })
                }
              />
            </Tooltip>
          )}
        </Card>
      </motion.div>
    </>
  );
};

export default TaskCard;
