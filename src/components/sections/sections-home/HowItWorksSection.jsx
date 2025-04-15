import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import PartnersSlider from '../../effects/Slider';

const HowItWorksSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 10,
        px: 2,
        direction: 'rtl',
        backgroundColor: '#fff',
        overflow: 'hidden',
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h6" sx={{ color: '#777' }}>
          איך זה עובד?
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f4a300' }}>
          3 שלבים פשוטים.
        </Typography>
      </Box>

      

      <Grid container spacing={4} justifyContent="center" alignItems="center">

        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          <Box
            component="img"
            src="/shape1.png"
            alt="shape1 "
            sx={{
              position: 'absolute',
              top: '-80px',
              right: '0',
              width: '300px',
              zIndex: 1,
            }}
          />
  
          <Box
            component="img"
            src="/easy-step-1.png"
            alt=" easy-step-1"
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 400,
              zIndex: 2,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {[1, 2, 3].map((step) => (
            <Box
              key={step}
              sx={{
                backgroundColor: '#062b3f',
                borderRadius: '12px',
                padding: 3,
                color: '#fff',
                maxWidth: 400,
                mb: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {step}
              </Typography>
              <Typography>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. גול מופקשר סוברג לתם שצבעי יהול.
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
        <PartnersSlider   logos={[
    '/calibero.png',
    '/DarksideCafe.png',
    '/Firekro.png',
    '/HouseTon.png',
    '/alilapto.png',
    '/andersen.png',
  ]} imageHeight={60}      
  imageWidth={100}  />
    </Box>
  );
};

export default HowItWorksSection;
