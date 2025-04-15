import React from 'react';
import { Box, Typography } from '@mui/material';
import PartnersSlider from '../../effects/Slider'; // מסלול ייבוא נכון


const ScrollingGallery = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f8fbff', textAlign: 'center', direction: 'rtl' }}>
 
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
        העסקים של המילואימניקים
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f4a300', my: 1 }}>
        העסקים שמפרגנים לך
      </Typography>
      <Typography variant="body1" sx={{ color: '#666', mb: 6 }}>
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף.
      </Typography>

      {/* photos*/}
      <PartnersSlider   logos={[
    '/calibero.png',
  ]} imageHeight={150}      
  imageWidth={300}  />

    </Box>
  );
};

export default ScrollingGallery;
