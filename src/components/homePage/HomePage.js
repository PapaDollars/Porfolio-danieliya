import './HomePage.css';
import React from 'react';
import { 
  Container,
  Box,
  Typography,
  Button,
  Alert
} from '@mui/material';
import { 
  Warning as WarningIcon, 
  Home as HomeIcon,
  ArrowForward as ArrowForwardIcon 
} from '@mui/icons-material';

function HomePage() {
  return (
    <Box className="HomePage">
      <Container maxWidth="md" sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Typography variant="h1" component="div" sx={{
          fontSize: '4rem',
          fontWeight: 'bold',
          mb: 2
        }}>
          Ancien Portfolio
        </Typography>
        
        <Box sx={{ color: 'warning.main', fontSize: '3rem', mb: 3 }}>
          <WarningIcon fontSize="inherit" />
        </Box>
        
        <Alert severity="warning" sx={{ mb: 4 }}>
          Vous visitez actuellement l'ancienne version de mon Curriculum Vitae.
        </Alert>
        
        {/* <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Nous avons migré vers une nouvelle plateforme !
        </Typography> */}
        
        <Typography variant="body1" sx={{ mb: 4 }}>
          J'ai migré vers une nouvelle plateforme,
          veuillez cliquer sur le bouton ci-dessous.
        </Typography>
        
        <Button
          href="https://portfolio-danieliya.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          endIcon={<ArrowForwardIcon />}
          sx={{
            py: 2,
            px: 4,
            mt: 2,
            fontSize: '1.1rem'
          }}
        >
          Accéder au nouveau portfolio
        </Button>
        
        <Box sx={{ mt: 5 }}>
          <Typography variant="caption" color="text.secondary">
            Si vous n'êtes pas redirigé automatiquement, <a href="https://portfolio-danieliya.vercel.app">cliquez ici</a>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;