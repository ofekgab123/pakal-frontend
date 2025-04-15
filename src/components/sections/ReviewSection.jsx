// ReviewsSection.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Fade,
  Paper,
} from '@mui/material';

const ReviewsSection = ({ title = 'ביקורות', reviews = [], interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, interval);
    return () => clearInterval(timer);
  }, [reviews.length, interval]);

  const current = reviews[index];

  return (
    <Box sx={{ px: 2, py: 10, backgroundColor: '#f8f9fa', textAlign: 'center', direction: 'rtl' }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>{title}</Typography>

      <Fade in timeout={800} key={index}>
        <Paper elevation={4} sx={{ maxWidth: 600, mx: 'auto', p: 4, borderRadius: 6, position: 'relative' }}>
          <Avatar
            src={current?.avatar}
            alt={current?.name}
            sx={{ width: 75, height: 75, position: 'absolute', top: -38, left: '50%', transform: 'translateX(-50%)' }}
          />
          <Typography variant="subtitle1" fontWeight="bold" mt={6}>{current?.name}</Typography>
          <Rating value={current?.rating || 0} readOnly size="small" sx={{ my: 1 }} />
          <Typography variant="body1" color="text.secondary">{current?.text}</Typography>
        </Paper>
      </Fade>
    </Box>
  );
};

export default ReviewsSection;