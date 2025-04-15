// ProductComparisonSection.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Collapse,
  IconButton,
  Avatar,
  Divider
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ProductFAQ = ({collapses = []}) => {
  const [expanded, setExpanded] = useState(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const featureGroups = [
    { label: 'WiFi חינם', available: true },
    { label: 'בריכה מחוממת', available: false },
    { label: 'ארוחת בוקר', available: true },
    { label: 'חנייה חינם', available: true },
  ];

  const faqItems = [
    {
      question: 'מה כוללת ההזמנה?',
      answer: 'ההזמנה כוללת לינה, ארוחת בוקר, גישה לבריכה ולמתקני הספא.'
    },
    {
      question: 'האם אפשר לבטל הזמנה?',
      answer: 'ניתן לבטל עד 24 שעות לפני מועד ההגעה ולקבל החזר מלא.'
    }
  ];

  return (
    <Box sx={{ px: 3, py: 6, backgroundColor: '#fff3e0', direction: 'rtl' }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        השוואת תכונות ומוצרים
      </Typography>


      <Grid container spacing={2}>
        {featureGroups.map((feature, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6} display="flex" alignItems="center">
              {feature.label}
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center" justifyContent="flex-start">
              {feature.available ? (
                <CheckIcon color="success" />
              ) : (
                <CloseIcon color="error" />
              )}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

  
      {collapses.map((item, index) => (
        <Box key={index} mb={3} sx={{ backgroundColor: '#fff', p: 2, borderRadius: 2, boxShadow: 1 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar src={item.image} alt={item.title} sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
              </Box>
            </Box>
            <IconButton onClick={() => setExpanded(expanded === index ? null : index)}>
              {expanded === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={expanded === index}>
            <Box mt={2}>
              <Typography variant="body2">{item.details}</Typography>
              {item.fullImage && (
                <Box mt={2}>
                  <img src={item.fullImage} alt="full" style={{ width: '100%', borderRadius: 8 }} />
                </Box>
              )}
            </Box>
          </Collapse>
        </Box>
      ))}

      <Divider sx={{ my: 6 }} />


      <Typography variant="h5" fontWeight="bold" mb={2}>
        שאלות נפוצות
      </Typography>
      {faqItems.map((item, idx) => (
        <Box key={idx} mb={2} sx={{ backgroundColor: '#ffffff', borderRadius: 2, p: 2, boxShadow: 1 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight="bold">{item.question}</Typography>
            <IconButton onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}>
              {faqOpenIndex === idx ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={faqOpenIndex === idx}>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {item.answer}
            </Typography>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default ProductFAQ;