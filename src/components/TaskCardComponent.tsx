import { Card, CardContent, Grid2, Typography } from '@mui/material';
import { useState } from 'react';

const TaskCardComponent = ({
  id,
  title,
  content,
  icon,
  dateTime,
  color,
}: {
  id: number;
  title: string;
  content: string;
  icon: string;
  dateTime: Date;
  color: string;
}) => {


    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => {
      setIsDragging(true);
    };
  
    const handleDragEnd = () => {
      setIsDragging(false);
    };


  return (
    <Grid2 size={{ xs: 12, md: 6 }}>
      <Card
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '15px',
          boxShadow: isDragging ? '6px 6px' : 'none',
          border: '1px solid #020202',
          padding: '10px',
          position: 'relative',
          overflow: 'visible',
          backgroundColor: '#fff',
          maxWidth: '80%'
        }}
      >
        {/* Main content of the card */}
        <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {icon} {title}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            {content}
          </Typography>
          <div style={{width:'100%', display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="caption" color='primary'>
                {dateTime.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                })}
            </Typography>
            <Typography variant="caption" color='primary'>
                {dateTime.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                })}
            </Typography>
          </div>
        </CardContent>

        {/* The color bar on the right */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '16px',
            height: '100%',
            backgroundColor: color,
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            borderRight: '1px solid black', 
            borderTop: '0.5px solid black',   
            borderBottom: '0.5px solid black', 
          }}
        />
      </Card>
    </Grid2>
  );
};

export default TaskCardComponent;
