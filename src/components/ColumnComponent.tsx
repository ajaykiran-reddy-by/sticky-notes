import { Grid2, Typography } from '@mui/material'
import TaskCardComponent from './TaskCardComponent'


const ColumnComponent = (
    {
        colId,
        colName,
        cards,
        handleDragOver,
        handleDrop,
      }: {
        colId: number,
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
      }
) => {


  return (
    <Grid2 size={6}>
        <Grid2 container direction={'column'} width={'100%'} border={'1px solid black'} onDragOver={()=> handleDragOver} onDrop={(e: any) => handleDrop(e, colId)}>
            <Grid2>
                <Typography variant="h5" align="left" color='primary'>
                    {colName}
                </Typography>
            </Grid2>
            <Grid2 container justifyContent={'center'} spacing={2}>
                    {cards.map((card) => (
                    <TaskCardComponent key={card.id} {...card} />
                ))}
            </Grid2>
        </Grid2>
    </Grid2>
  )
}

export default ColumnComponent