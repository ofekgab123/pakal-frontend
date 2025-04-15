import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ProductHeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/free-contact-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        direction: 'rtl',
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          רק עוד כמה רגעים להבטחת החופשה המושלמת
        </Typography>
        <Typography variant="h9" sx={{ mb: 1 }}>
          כבר התחלת לבנות את החופשה, עכשיו זה הזמן לסיים.
        </Typography>
        <Typography variant="h9">
          יש להשלים את ההזמנה ע"י בניית החבילה והעברה לתשלום.
        </Typography>
      </Container>
    </Box>
  );
};

export default ProductHeroSection;