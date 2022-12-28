import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingBackDrop({openBackDrop}) {
  return (
    <Backdrop
        sx={{ 
            color: '#0b79bf',
            backgroundColor: "rgb(240,230,0,0.4)",
            zIndex: (theme) => theme.zIndex.drawer - 1,
            position: 'absolute',
            top: '0',
            bgcolor: 'rgba(0, 0, 0, 0.5)'
        }}
        open={openBackDrop}>
        <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default LoadingBackDrop