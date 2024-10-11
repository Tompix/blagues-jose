import React from 'react';
import { Paper, Typography, Box, TextField } from '@mui/material';

interface CustomizeJoseProps {
  setJoseStyle: React.Dispatch<React.SetStateAction<{ hairColor: string; shirtColor: string }>>;
}

const CustomizeJose: React.FC<CustomizeJoseProps> = ({ setJoseStyle }) => {
  return (
    <Paper elevation={3} sx={{ mt: 4, p: 3, maxWidth: 'sm', width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Personnaliser José
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Couleur de cheveux"
          type="color"
          onChange={(e) => setJoseStyle(prev => ({ ...prev, hairColor: e.target.value }))}
          sx={{ width: '50%' }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Couleur de t-shirt"
          type="color"
          onChange={(e) => setJoseStyle(prev => ({ ...prev, shirtColor: e.target.value }))}
          sx={{ width: '50%' }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
    </Paper>
  );
};

export default CustomizeJose;