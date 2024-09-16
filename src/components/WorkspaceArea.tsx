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
  
export const initialColumnsData = [
    {
      colName: 'sports',
      colId: 1,
      cards: [
        {
          id: 1,
          title: 'Task 1',
          content: 'This is task 1 content.',
          icon: '📝',
          dateTime: new Date(),
          color: '#4285f4',
          section: 1,
        },
        {
          id: 2,
          title: 'Task 2',
          content: 'This is task 2 content.',
          icon: '📅',
          dateTime: new Date(),
          color: '#4285f4',
          section: 1,
        },
      ],
    },
    {
      colName: 'personal',
      colId: 2,
      cards: [
        {
          id: 3,
          title: 'Task 3',
          content: 'This is task 3 content.',
          icon: '⚙️',
          dateTime: new Date(),
          color: '#fbbc05',
          section: 2,
        },
      ],
    },
    {
      colName: 'work',
      colId: 3,
      cards: [
        {
          id: 4,
          title: 'Task 4',
          content: 'This is task 4 content.',
          icon: '✅',
          dateTime: new Date(),
          color: '#ea4335',
          section: 3,
        },
      ],
    },
  ];


const WorkspaceArea = () => {
        const [columns, setColumns] = useState<Column[]>([]);

        useEffect(() => {
          let data: any = localStorage.getItem("columnsData") || "{}";
          data = JSON.parse(data) || null;
          console.log(data, "[]data");
          setColumns(data.length ? data : initialColumnsData);
        }, [])

        console.log(columns)
      
        useEffect(() => {
          localStorage.setItem('columnsData', JSON.stringify(columns));
        }, [columns]);

        const handleDragOver = (event: React.DragEvent) => {
            event.preventDefault(); 
          };
        
          const handleDrop = (event: React.DragEvent, targetColumnId: number) => {
            event.preventDefault();
            
            // Parse dataTransfer to get task id and origin column id
            const { id, originColumnId } = JSON.parse(event.dataTransfer.getData('text/plain'));
          
            // Find the task in the origin column
            const originColumn = columns.find(column => column.colId === originColumnId);
            const targetColumn = columns.find(column => column.colId === targetColumnId);
            
            if (originColumn && targetColumn) {
              const taskIndex = originColumn.cards.findIndex((task: Card) => task.id === id);
              
              if (taskIndex !== -1) {
                const task = originColumn.cards[taskIndex];
          
                // Create updated columns
                const newColumns = columns.map(column => {
                  if (column.colId === originColumnId) {
                    // Remove task from origin column
                    return {
                      ...column,
                      cards: column.cards.filter((_, index) => index !== taskIndex)
                    };
                  }
                  if (column.colId === targetColumnId) {
                    // Add task to target column
                    return {
                      ...column,
                      cards: [...column.cards, task]
                    };
                  }
                  return column;
                });
          
                // Update state with new columns
                setColumns(newColumns);
              }
            }
          };


    return (<Grid2 container rowSpacing={1} width={'100vw'}>
        {columns.map((column) => (
          <ColumnComponent
            key={column.colId}
            colId={column.colId}
            colName={column.colName}
            cards={column.cards}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        ))}
      </Grid2>);
  };
  
  export default WorkspaceArea;
  