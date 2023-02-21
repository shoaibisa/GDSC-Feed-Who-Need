import {Box, useTheme } from '@mui/material';
import React from 'react';
import {tokens} from '../../theme.js';
function ProgressCircle({progress, size = '40'}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360; 
  return (
    <Box sx={{
        background:`radial-Gradient(${colors.primary[400]} 55%, transparent 56%),
        conic-gradient(transaparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
        ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width:`${size}px`,
        height: `${size}px`
        }}>

    </Box>
  )
}

export default ProgressCircle;