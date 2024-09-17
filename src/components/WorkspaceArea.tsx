import { Grid2 } from "@mui/material";
import ColumnContainer from "./ColumnContainer";
import { useEffect, useState } from "react";
import { initialColumnsData } from "../constants/constants";
import { Section } from "../types/type";
import { motion } from "framer-motion";

interface Props {
  openDialog: boolean;
}

const WorkspaceArea = ({ openDialog }: Props) => {
  const initialiseSectionData = () => {
    let data: any = localStorage.getItem("columnsData") || "{}";
    data = JSON.parse(data) || null;
    return data.length ? data : initialColumnsData;
  };

  const [columns, setColumns] = useState<Section[]>(initialiseSectionData());

  useEffect(() => {
    if (!openDialog) {
      let result = initialiseSectionData();
      setColumns(result);
    }
  }, [openDialog]);

  useEffect(() => {
    localStorage.setItem("columnsData", JSON.stringify(columns));
  }, [columns]);

  const [draggedCardId, setDraggedCardId] = useState<number | null>(null);

  const handleDragStart = (e: any, cardId: number) => {
    setDraggedCardId(cardId);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", cardId);
  };

  const handleDragEnd = () => {
    console.log("inside handle drop");
    setDraggedCardId(null);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: any, targetColId: number) => {
    console.log("inside handle drop");
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    if (draggedCardId) {
      const sourceColIndex = columns.findIndex((col) =>
        col.cards.some((card) => card.id === draggedCardId)
      );
      const targetColIndex = columns.findIndex(
        (col) => col.sectionId === targetColId
      );

      if (sourceColIndex !== -1 && targetColIndex !== -1) {
        //handle index not found and dropping in the same column
        const cardToMove = columns[sourceColIndex].cards.find(
          (card) => card.id === draggedCardId
        );

        if (!cardToMove) return;

        if (sourceColIndex === targetColIndex) {
          const cardIndex = columns[sourceColIndex].cards.findIndex(
            (card) => card.id === draggedCardId
          );

          const targetIndex = 1; //fetch target index and replace

          const reorderedCards = [...columns[sourceColIndex].cards];
          reorderedCards.splice(cardIndex, 1);
          reorderedCards.splice(targetIndex, 0, cardToMove);

          const updatedColumn = {
            ...columns[sourceColIndex],
            cards: reorderedCards,
          };

          const updatedColumns = [...columns];
          updatedColumns[sourceColIndex] = updatedColumn;

          setColumns(updatedColumns);
        } else {
          //handle moving cards to different columns

          const updatedSourceCol = {
            ...columns[sourceColIndex],
            cards: columns[sourceColIndex].cards.filter(
              (card) => card.id !== draggedCardId
            ),
          };

          const updatedTargetCol = {
            ...columns[targetColIndex],
            cards: [...columns[targetColIndex].cards, cardToMove],
          };

          const updatedColumns = [...columns];
          updatedColumns[sourceColIndex] = updatedSourceCol;
          updatedColumns[targetColIndex] = updatedTargetCol;

          setColumns(updatedColumns);
          // localStorage.setItem("columnsData", JSON.stringify(updatedColumns));
        }
      }
    }

    setDraggedCardId(null);
  };

  return (
    <Grid2 container spacing={3}>
      {columns.map((column, index) => (
        <Grid2 size={{ xs: 12, md: 4 }}>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, delay: 0.5 + index }}
          >
            <ColumnContainer
              key={column.sectionId}
              sectionId={column.sectionId}
              sectionName={column.sectionName}
              cards={column.cards}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              handleDragStart={handleDragStart}
              handleDragEnd={handleDragEnd}
              sectionColor={column.sectionColor}
            />
          </motion.div>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default WorkspaceArea;
