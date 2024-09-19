import { Grid2, IconButton, Tooltip } from "@mui/material";
import ColumnContainer from "./ColumnContainer";
import { useEffect, useState } from "react";
import { initialColumnsData } from "../constants/constants";
import { Section } from "../types/type";
import { motion } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionsSnackbar } from "./Snackbar";

interface Props {
  openDialog: boolean;
  cbInd: boolean;
  handleCloseCb: Function;
}

const WorkspaceArea = ({ openDialog, handleCloseCb, cbInd }: Props) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const initialiseSectionData = () => {
    let data: any = localStorage.getItem("columnsData") || "{}";
    data = JSON.parse(data) || null;
    return data.length ? data : initialColumnsData;
  };

  const [columns, setColumns] = useState<Section[]>(initialiseSectionData());
  const [openDelete, setOpenDelete] = useState(false);
  const [targetCardId, setTargetCardId] = useState<number | null>();

  useEffect(() => {
    if (!openDialog) {
      let result = initialiseSectionData();
      setColumns(result);
    }
  }, [openDialog, cbInd]);

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

  const handleDrop = (e: any, targetColId: number | string) => {

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

      if (targetColId === "DEL") {
        console.log("Entered DEL");
        const cardToMove = columns[sourceColIndex].cards.find(
          (card) => card.id === draggedCardId
        );

        if (!cardToMove) return;

        const updatedSourceCol = {
          ...columns[sourceColIndex],
          cards: columns[sourceColIndex].cards.filter(
            (card) => card.id !== draggedCardId
          ),
        };

        const updatedColumns = [...columns];
        updatedColumns[sourceColIndex] = updatedSourceCol;
        setColumns(updatedColumns);
        setOpenDelete(false);
        setShowSnackbar(true);
        return;
      }

      if (sourceColIndex !== -1 && targetColIndex !== -1) {
        //handle index not found and dropping in the same column
        const cardToMove = columns[sourceColIndex].cards.find(
          (card) => card.id === draggedCardId
        );

        if (!cardToMove) return;

        if (sourceColIndex === targetColIndex && targetCardId) {
          const cardIndex = columns[sourceColIndex].cards.findIndex(
            (card) => card.id === draggedCardId
          );

          const targetIndex = columns[sourceColIndex].cards.findIndex(
            (card) => card.id === targetCardId
          ); //fetch target index and replace

          console.log(cardIndex, "[targetCardIndex]");
          console.log(targetCardId, "[targetCardId]");
          console.log(targetIndex, "[targetIndex]");

          const reorderedCards = [...columns[sourceColIndex].cards];
          let tmp = reorderedCards[cardIndex];
          reorderedCards[cardIndex] = reorderedCards[targetIndex];
          reorderedCards[targetIndex] = tmp;

          const updatedColumn = {
            ...columns[sourceColIndex],
            cards: reorderedCards,
          };

          const updatedColumns = [...columns];
          updatedColumns[sourceColIndex] = updatedColumn;
          setTargetCardId(null);
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

  const swapCard = (targetId: number) => {
    console.log(targetId, "[targetId]");
    setTargetCardId(targetId);
  };

  return (
    <>
      <Grid2 container spacing={3} style={{ position: "relative" }}>
        {columns.map((column, index) => (
          <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, delay: index / 10 }}
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
                handleCloseCb={handleCloseCb}
                swapCard={swapCard}
              />
            </motion.div>
          </Grid2>
        ))}
      </Grid2>
      <div
        onDrop={(e) => handleDrop(e, "DEL")}
        onDragOver={(e) => {
          setOpenDelete(true);
          e.preventDefault();
        }}
        onDragLeave={() => {setOpenDelete(false);
          
          {showSnackbar && <TransitionsSnackbar />}
        }}
        style={{
          backgroundColor: "#f590a7",
          height: "30vh",
          padding: "2rem",
          border: "1px dotted #000",
          // position: "sticky",
          opacity: openDelete ? "100%" : "0%",
          // bottom: 0,
          borderRadius: "12px 0px 0px 12px",
          // right: "0%",
          // transform: "translateX(50%)",
          transition: "opacity 0.5s ease-in",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "40%",
          right: 0,
        }}
      >
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon style={{ color: "#fff", fontSize: "3rem" }} />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default WorkspaceArea;
