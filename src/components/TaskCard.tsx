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
  swapCard,
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
  swapCard: Function;
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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
          onDragEnter={() => swapCard(id)}
          sx={{
            borderRadius: "15px",
            boxShadow: isDragging ? "6px 6px" : "none",
            border: "2px solid #020202",
            padding: "5px",
            position: "relative",
            // overflow: "visible",
            backgroundColor: "#fff",
            marginTop: "10px",
            width: "100%",
            height: "100px",
            overflow: "scroll",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <CardContent
            sx={{ flexGrow: 1, padding: "1rem", marginRight: "1rem" }}
          >
            <Typography variant="body2" sx={{ marginBottom: "8px" }}>
              {content}
            </Typography>
          </CardContent>

          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "8%",
              height: "100px",
              backgroundColor: color,
              borderTopRightRadius: "12px",
              // borderBottomRightRadius: "12px",
              // borderRight: "2px solid black",
            }}
          />
          {isHovering && (
            <Tooltip title="Edit">
              <EditIcon
                style={{
                  position: "absolute",
                  top: "40%",
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
