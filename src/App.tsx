import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Jose from './components/Jose';
import JokeDisplay from './components/JokeDisplay';
import CustomizeJose from './components/CustomizeJose';
import { Joke } from './types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const App: React.FC = () => {
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);
  const [isSuperJoke, setIsSuperJoke] = useState(false);
  const [joseStyle, setJoseStyle] = useState({
    hairColor: '#000000',
    shirtColor: '#ffffff',
  });

  const fetchJoke = () => {
    const jokes: Joke[] = [
      { text: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau !", rating: 2 },
      { text: "Que fait une fraise sur un cheval ? Tagada tagada !", rating: 1 },
      { text: "Pourquoi les Belges viennent-ils à la messe avec du savon ? Pour l'Ave Maria !", rating: 3 },
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setCurrentJoke(randomJoke);
    setIsSuperJoke(Math.random() < 0.2);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Les Blagues de José
          </Typography>
          <Jose style={joseStyle} isSuperJoke={isSuperJoke} />
          <JokeDisplay joke={currentJoke} isSuperJoke={isSuperJoke} />
          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={fetchJoke}
              startIcon={<InsertEmoticonIcon />}
            >
              Nouvelle blague
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setIsSuperJoke(true)}
              startIcon={<FlashOnIcon />}
            >
              Super Blague !
            </Button>
          </Box>
          <CustomizeJose setJoseStyle={setJoseStyle} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;