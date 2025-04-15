import React from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const visibleCount = 4;

const PackageBuilderSection = ({ items = [], startIndex = 0, onPrev, onNext }) => {
  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <Box sx={{ backgroundColor: '#f6f6fb', py: 10, px: 2, textAlign: 'center', direction: 'rtl' }}>
      <Typography variant="h6" sx={{ color: '#777' }}>
        זה הזמן לבנות את החופשה.
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f4a300', mb: 2 }}>
        בניית חופשה מושלמת
      </Typography>
      <Typography variant="h6" sx={{ color: '#777', mb: 8 }}>
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף.
      </Typography>

      <Grid container justifyContent="center" spacing={3}>
        {visibleItems.map((item, index) => (
          <Grid item key={index}>
            <Box
              onClick={() => window.location.href = item.link}
              sx={{
                width: 250,
                height: 300,
                backgroundColor: '#eee',
                borderRadius: 1,
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 2,
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{ width: '100%', height: '70%', objectFit: 'cover' }}
              />
              <Box sx={{ backgroundColor: '#062b3f', color: '#fff', py: 1, fontWeight: 'bold' }}>
                {item.title}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>


      <Box sx={{ mt: 3 }}>
        <IconButton onClick={onPrev} disabled={startIndex === 0}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={onNext} disabled={startIndex + visibleCount >= items.length}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>


      <Button
        variant="contained"
        href="/build-package"
        sx={{
          mt: 4,
          borderRadius: '50px',
          px: 4,
          py: 1.5,
          fontWeight: 'bold',
          backgroundColor: '#062b3f',
          '&:hover': { backgroundColor: '#041e2c' },
        }}
      >
        להרכבת החבילה המלאה
      </Button>
    </Box>
  );
};

export default PackageBuilderSection;
