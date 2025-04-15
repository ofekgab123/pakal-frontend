import React from 'react';
import { Box, Typography, Avatar, Grid, Rating, IconButton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialsSection = ({ testimonials = [], activeIndex = 0, onDotClick = () => {} }) => {
  const visibleItems = testimonials.slice(activeIndex, activeIndex + 2);

  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: '#fff', direction: 'rtl', textAlign: 'center' }}>

      <Typography variant="h6" color="#777">
        לקוחות מספרים
      </Typography>
      <Typography variant="h4" fontWeight="bold" color="#f4a300" mb={2}>
        לוחם איפסום גדולור סיט אמט
      </Typography>
      <Typography mb={5} sx={{ color: '#555' }}>
        לוחם איסוף גדולור סיט אמט, קונסקטורר אדיפיסינג אלית. מתאים גם למפקדי אבן.
      </Typography>


      <Grid container justifyContent="center" spacing={4}>
        {visibleItems.map((item, i) => (
          <Grid item xs={12} md={5} key={i}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 3,
                p: 4,
                textAlign: 'right',
              }}
            >
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar src={item.image} alt={item.name} sx={{ width: 56, height: 56, ml: 2 }} />
                <Box>
                  <Typography fontWeight="bold" color="#f4a300">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.role}
                  </Typography>
                </Box>
              </Box>

              <Rating value={item.rating} readOnly size="small" />

              <Typography mt={2} variant="body2" color="text.primary">
                {item.text}
              </Typography>

              <FormatQuoteIcon sx={{ fontSize: 30, color: '#4dabf7', mt: 2 }} />
            </Box>
          </Grid>
        ))}
      </Grid>


      <Box mt={4} display="flex" justifyContent="center" gap={1}>
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
          <IconButton
            key={i}
            size="small"
            onClick={() => onDotClick(i * 2)}
            sx={{
              width: 12,
              height: 12,
              backgroundColor: activeIndex === i * 2 ? '#4dabf7' : '#ccc',
              borderRadius: '50%',
              '&:hover': { backgroundColor: '#339af0' },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
