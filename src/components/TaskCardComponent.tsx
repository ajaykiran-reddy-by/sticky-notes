import { Card, CardContent, Grid2, Typography } from "@mui/material";
import { useState } from "react";

const TaskCardComponent = ({
  id,
  title,
  content,
  icon,
  dateTime,
  color,
  handleDragStart,
  handleDragEnd,
}: {
  id: number;
  title: string;
  content: string;
  icon: string;
  dateTime: Date;
  color: string;
  handleDragStart: Function;
  handleDragEnd: Function;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  console.log(dateTime, "[date time]");

  return (
    <Grid2 size={{ xs: 12, md: 6 }}>
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
      >
        <CardContent sx={{ flexGrow: 1, padding: "16px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {icon} {title}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "8px" }}>
            {content}
          </Typography>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="caption" color="primary">
              {dateTime.toString()}
            </Typography>
            <Typography variant="caption" color="primary">
              {dateTime.toString()}
            </Typography>
          </div>
        </CardContent>

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "16px",
            height: "100%",
            backgroundColor: color,
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            borderRight: "1px solid black",
            borderTop: "0.25px solid black",
            borderBottom: "0.5px solid black",
          }}
        />
      </Card>
    </Grid2>
  );
};

export default TaskCardComponent;
