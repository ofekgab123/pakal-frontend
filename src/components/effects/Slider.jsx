import React from 'react';
import { Box, Typography } from '@mui/material';

const PartnersSlider = ({ logos = [], imageHeight = 50, imageWidth = 'auto' }) => {
  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 4, overflow: 'hidden' }}>


      <Box
        sx={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'slideLeft 20s linear infinite',
          '& img': {
            height: imageHeight,
            width: imageWidth,
            marginRight: 8,
            filter: 'grayscale(100%)',
            transition: 'filter 0.3s',
            '&:hover': {
              filter: 'grayscale(0%)',
            },
          },
        }}
      >
        {[...logos, ...logos].map((src, index) => (
          <Box key={index} sx={{ display: 'inline-block', px: 2 }}>
            <img src={src} alt={`partner-${index}`} />
          </Box>
        ))}
      </Box>

      <style>
        {`
          @keyframes slideLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

export default PartnersSlider;
