import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Joke } from '../types';

interface JokeDisplayProps {
  joke: Joke | null;
  isSuperJoke: boolean;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke, isSuperJoke }) => {
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    setShowPunchline(false);
    const timer = setTimeout(() => setShowPunchline(true), 2000);
    return () => clearTimeout(timer);
  }, [joke]);

  if (!joke) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        p: 3,
        maxWidth: 'sm',
        width: '100%',
        textAlign: 'center',
        animation: isSuperJoke ? 'bounce 0.5s infinite' : 'none',
        '@keyframes bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {joke.text}
      </Typography>
      {showPunchline && (
        <Box mt={2}>
          <Typography
            variant="body1"
            color={
              joke.rating === 1
                ? 'error'
                : joke.rating === 2
                ? 'warning.main'
                : 'success.main'
            }
          >
            {joke.rating === 1 && '*Silence gênant*'}
            {joke.rating === 2 && '*Rire poli*'}
            {joke.rating === 3 && '*Éclat de rire*'}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default JokeDisplay;