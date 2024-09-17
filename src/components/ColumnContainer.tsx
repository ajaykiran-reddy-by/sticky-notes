import { Grid2, Typography } from "@mui/material";
import TaskCard from "./TaskCard";
import { useRef } from "react";
import { Section } from "../types/type";

const ColumnContainer = (props: Section) => {
  const {
    cards,
    handleDragEnd,
    handleDragOver,
    handleDragStart,
    handleDrop,
    sectionColor,
    sectionId,
    sectionName,
  } = props;
  console.log(sectionColor, "[section color]");
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Grid2 size={6}>
      <Grid2
        container
        ref={containerRef}
        direction={"column"}
        width={"100%"}
        minHeight={"50vh"}
        border={"1px solid black"}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e: any) => handleDrop(e, sectionId)}
      >
        <Grid2>
          <Typography variant="h5" align="left" color="primary">
            {sectionName}
          </Typography>
        </Grid2>
        <Grid2 container justifyContent={"center"} spacing={2}>
          {cards.map((card) => (
            <TaskCard
              // containerRef={containerRef}
              handleDragStart={handleDragStart}
              handleDragEnd={handleDragEnd}
              key={card.id}
              color={sectionColor}
              {...card}
            />
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ColumnContainer;
