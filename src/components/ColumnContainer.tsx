import { Grid2, Typography } from "@mui/material";
import TaskCard from "./TaskCard";
import { useRef, useState } from "react";
import { Section } from "../types/type";
import { motion, Reorder, useDragControls } from "framer-motion";

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
    swapCard,
  } = props;

  const controls = useDragControls()
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState(cards.map(card => card.id))

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
          <Reorder.Group axis="y" values={items} onReorder={setItems} style={{ display: 'flex', flexDirection: 'column' , width: '100%', margin: 0, padding: 0}}>
            {cards.map((card, index) => (
                <Reorder.Item 
                dragControls={controls}
                key={card.id} value={index} style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                {/* <motion.div
                  animate={{ y: [-10, 10] }}
                  transition={{
                    duration: (index % 2) + 1,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    x: { type: "spring", bounce: 20 },
                  }}
                > */}
                <TaskCard
                  // containerRef={containerRef}
                  handleDragStart={handleDragStart}
                  handleDragEnd={handleDragEnd}
                  swapCard={swapCard}
                  key={card.id}
                  color={sectionColor}
                  handleCloseCb={props.handleCloseCb}
                  {...card}
                ></TaskCard>
                {/* </motion.div> */}
                </Reorder.Item>
            ))}
            </Reorder.Group>
          </Grid2>
        </Grid2>
    </motion.div>
  );
};

export default ColumnContainer;
