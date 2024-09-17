import { Grid2, Typography } from "@mui/material";
import TaskCardComponent from "./TaskCardComponent";
import { useRef } from "react";

const ColumnComponent = ({
  colId,
  colName,
  cards,
  handleDragOver,
  handleDrop,
  handleDragStart,
  handleDragEnd,
}: {
  colId: number;
  colName: string;
  cards: {
    id: number;
    title: string;
    content: string;
    icon: string;
    dateTime: Date;
    color: string;
    section: number;
  }[];
  handleDragOver: Function;
  handleDrop: Function;
  handleDragStart: Function;
  handleDragEnd: Function;
}) => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Grid2 size={6}>
      <Grid2
        container
        ref={containerRef}
        direction={"column"}
        width={"100%"}
        minHeight={'50vh'}
        border={"1px solid black"}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e: any) => handleDrop(e, colId)}
      >
        <Grid2>
          <Typography variant="h5" align="left" color="primary">
            {colName}
          </Typography>
        </Grid2>
        <Grid2 container justifyContent={"center"} spacing={2}>
          {cards.map((card) => (
            <TaskCardComponent
              containerRef={containerRef}
              handleDragStart={handleDragStart}
              handleDragEnd={handleDragEnd}
              key={card.id}
              {...card}
            />
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ColumnComponent;
