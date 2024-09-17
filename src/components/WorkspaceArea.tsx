import { Grid2 } from "@mui/material";
import ColumnComponent from "./ColumnComponent";
import { useEffect, useState } from "react";

/**
 *
 * @returns
 */

interface Card {
  id: number;
  title: string;
  content: string;
  icon: string;
  dateTime: Date;
  color: string;
  section: number;
}

interface Column {
  colName: string;
  colId: number;
  cards: Card[];
}

const initialColumnsData = [
  {
    colName: "To Do",
    colId: 1,
    cards: [
      {
        id: 1,
        title: "Task 1",
        content: "This is task 1 content.",
        icon: "📝",
        dateTime: new Date(),
        color: "#4285f4",
        section: 1,
      },
      {
        id: 2,
        title: "Task 2",
        content: "This is task 2 content.",
        icon: "📅",
        dateTime: new Date(),
        color: "#4285f4",
        section: 1,
      },
    ],
  },
  {
    colName: "In Progress",
    colId: 2,
    cards: [
      {
        id: 3,
        title: "Task 3",
        content: "This is task 3 content.",
        icon: "⚙️",
        dateTime: new Date(),
        color: "#fbbc05",
        section: 2,
      },
    ],
  },
  {
    colName: "Done",
    colId: 3,
    cards: [
      {
        id: 4,
        title: "Task 4",
        content: "This is task 4 content.",
        icon: "✅",
        dateTime: new Date(),
        color: "#ea4335",
        section: 3,
      },
    ],
  },
];

const WorkspaceArea = () => {
  let data: any = localStorage.getItem("columnsData") || "{}";
  data = JSON.parse(data) || null;

  const [columns, setColumns] = useState<Column[]>(
    data.length ? data : initialColumnsData
  );

  // useEffect(() => {
  //   let data: any = localStorage.getItem("columnsData") || "{}";
  //   data = JSON.parse(data) || null;
  //   // console.log(data, "[]data");
  //   setColumns(data.length ? data : initialColumnsData);
  // }, []);

  // console.log(columns);

  useEffect(() => {
    localStorage.setItem("columnsData", JSON.stringify(columns));
  }, [columns]);

  // const handleDragOver = (event: React.DragEvent) => {
  //     event.preventDefault();
  //   };

  //   const handleDrop = (event: React.DragEvent, targetColumnId: number) => {
  //     event.preventDefault();

  //     const { id, originColumnId } = JSON.parse(event.dataTransfer.getData('text/plain'));

  //     const originColumn = columns.find(column => column.colId === originColumnId);
  //     const targetColumn = columns.find(column => column.colId === targetColumnId);

  //     if (originColumn && targetColumn) {
  //       const taskIndex = originColumn.cards.findIndex((task: Card) => task.id === id);

  //       if (taskIndex !== -1) {
  //         const task = originColumn.cards[taskIndex];

  //         const newColumns = columns.map(column => {
  //           if (column.colId === originColumnId) {
  //             return {
  //               ...column,
  //               cards: column.cards.filter((_, index) => index !== taskIndex)
  //             };
  //           }
  //           if (column.colId === targetColumnId) {
  //             return {
  //               ...column,
  //               cards: [...column.cards, task]
  //             };
  //           }
  //           return column;
  //         });

  //         setColumns(newColumns);
  //       }
  //     }
  //   };
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
      const targetColIndex = columns.findIndex((col) => col.colId === targetColId);
  
      if (sourceColIndex !== -1 && targetColIndex !== -1) {     //handle index not found and dropping in the same column  
        const cardToMove = columns[sourceColIndex].cards.find(
          (card) => card.id === draggedCardId
        );
  
        if (!cardToMove) return;

        if (sourceColIndex === targetColIndex) {
          const cardIndex = columns[sourceColIndex].cards.findIndex(
            (card) => card.id === draggedCardId
          );

          const targetIndex = 1;   //fetch target index and replace
          
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
        } else {  //handle moving cards to different columns
   
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
    <Grid2 container rowSpacing={1} width={"100vw"}>
      {columns.map((column) => (
        <ColumnComponent
          key={column.colId}
          colId={column.colId}
          colName={column.colName}
          cards={column.cards}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
      ))}
    </Grid2>
  );
};

export default WorkspaceArea;
