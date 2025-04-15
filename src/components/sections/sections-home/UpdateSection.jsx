import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const UpdatesSection = ({ title = "עדכונים וחדשות", subtitle = "הישארו מעודכנים", items = [] }) => {
  return (
<Box sx={{ py: 10, px: 2, backgroundColor: '#fefaf5', direction: 'rtl', textAlign: 'center' }}>


      <Typography variant="subtitle1" sx={{ color: '#333', fontWeight: 'bold' }}>
        {subtitle}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f4a300', mb: 4 }}>
        {title}
      </Typography>


      <Grid container spacing={4} justifyContent="center">
        {items.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 2,
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{ width: '100%', height: 180, objectFit: 'cover' }}
              />
              <Box sx={{ p: 3, textAlign: 'right' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpdatesSection;
