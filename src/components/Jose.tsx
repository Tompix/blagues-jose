import React from 'react';
import { Box } from '@mui/material';

interface JoseProps {
  style: {
    hairColor: string;
    shirtColor: string;
  };
  isSuperJoke: boolean;
}

const Jose: React.FC<JoseProps> = ({ style, isSuperJoke }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 160,
        height: 160,
        borderRadius: '50%',
        overflow: 'hidden',
        bgcolor: 'grey.300',
        animation: isSuperJoke ? 'pulse 1s infinite' : 'none',
        '@keyframes pulse': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.7)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(255, 215, 0, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(255, 215, 0, 0)',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '33%',
          bgcolor: style.hairColor,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '67%',
          bgcolor: style.shirtColor,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 64,
          height: 32,
          bgcolor: 'white',
          borderRadius: 16,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'black' }} />
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'black' }} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '33%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 32,
          height: 4,
          bgcolor: 'black',
          borderRadius: 2,
        }}
      />
    </Box>
  );
};

export default Jose;