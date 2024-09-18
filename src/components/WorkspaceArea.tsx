import { Grid2 } from "@mui/material";
import ColumnComponent from "./ColumnContainer";
import { useEffect, useState } from "react";
import { initialColumnsData } from "../constants/constants";
import { Section } from "../types/type";

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
  const [openDelete, setOpenDelete] = useState(false)

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

  const handleDrop = (e: any, targetColId: number|string) => {
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

      if(targetColId === 'DEL'){
        console.log('Entered DEL')
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
        setOpenDelete(false)
        return
      }

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

  console.log(columns, "columns");

  return (
    <Grid2 container rowSpacing={1} width={"100vw"} style={{ position: 'relative' }}>
      {columns.map((column) => (
        <ColumnComponent
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
      ))}
      <div 
      onDrop={(e) => handleDrop(e, 'DEL')}
      onDragOver={(e) => {
        setOpenDelete(true)
        e.preventDefault()
      }}
      onDragLeave={() => setOpenDelete(false)}
      style={{ backgroundColor: '#FF0000',
      width: '25vw',
      height: openDelete ? '15%' : '5%',
      border: '1px solid black',
      position: 'absolute',
      opacity: openDelete ? '100%' : '25%',
      bottom: 0,
      borderRadius: '12px 12px 0px 0px',
      left: '50%',
      transform: 'translateX(-50%)', 
      transition: 'height 0.3s ease',
      }}>
      </div>
    </Grid2>
  );
};

export default WorkspaceArea;
