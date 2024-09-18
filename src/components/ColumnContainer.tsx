import { Grid2, Typography } from "@mui/material";
import TaskCard from "./TaskCard";
import { useRef } from "react";
import { Section } from "../types/type";
import { motion } from "framer-motion";

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

  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Grid2 size={12}>
        <Grid2
          container
          ref={containerRef}
          direction={"column"}
          width={"100%"}
          minHeight={"50vh"}
          border={"1px dotted lightgrey"}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e: any) => handleDrop(e, sectionId)}
        >
          <Grid2>
            <Typography variant="h6" align="center" color="primary">
              {sectionName}
            </Typography>
          </Grid2>
          <Grid2 container justifyContent={"center"} spacing={2}>
            {cards.map((card, index) => (
              <Grid2 size={{ xs: 12, md: 6 }}>
                <motion.div
                  animate={{ y: [-10, 10] }}
                  transition={{
                    duration: (index % 2) + 1,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    x: { type: "spring", bounce: 20 },
                  }}
                >
                  <TaskCard
                    // containerRef={containerRef}
                    handleDragStart={handleDragStart}
                    handleDragEnd={handleDragEnd}
                    key={card.id}
                    color={sectionColor}
                    {...card}
                  />
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </motion.div>
  );
};

export default ColumnContainer;
