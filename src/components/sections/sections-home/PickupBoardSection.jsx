import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const points = [
  {
    icon: <InboxIcon sx={{ color: '#ff7043' ,fontSize: 40 }} />,
    title: 'לוחם איסוף דולור סיט אמט',
    desc: 'לוחם איסוף דולור סיט אמט, קונסקטורר אדיפיסינג אלית. מונצ׳י אדום מלוח. מתאים לשבת.',
  },
  {
    icon: <CreditCardIcon sx={{ color: '#ffca28',fontSize: 40   }} />,
    title: 'לוחם איסוף דולור סיט אמט',
    desc: 'לוחם איסוף דולור סיט אמט, קונסקטורר אדיפיסינג אלית. מונצ׳י אדום מלוח. מתאים לשבת.',
  },
  {
    icon: <LocationOnIcon sx={{ color: '#4dd0e1' ,fontSize: 40 }} />,
    title: 'לוחם איסוף דולור סיט אמט',
    desc: 'לוחם איסוף דולור סיט אמט, קונסקטורר אדיפיסינג אלית. מונצ׳י אדום מלוח. מתאים לשבת.',
  },
  {
    icon: <ShoppingBagIcon sx={{ color: '#f48fb1' ,fontSize: 40 }} />,
    title: 'לוחם איסוף דולור סיט אמט',
    desc: 'לוחם איסוף דולור סיט אמט, קונסקטורר אדיפיסינג אלית. מונצ׳י אדום מלוח. מתאים לשבת.',
  },
];

const PickupBoardSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#062b3f',
        color: '#fff',
        py: 10,
        px: 2,
        borderBottomRightRadius: { xs: 80, md: 300 },
        borderBottomLeftRadius: { xs: 80, md: 300 },
        direction: 'rtl',
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" fontWeight="bold" mb={4}>
            לוח איסוף איזורי
          </Typography>

          <Stack spacing={3}>
            {points.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box>{item.icon}</Box>
                <Box>
                  <Typography variant="h5" fontWeight="bold">{item.title}</Typography>
                  <Typography variant="body2">{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="/powerful.png" 
            alt="man"
            sx={{
              width: '100%',
              maxWidth: 400,
              mx: 'auto',
              display: 'block',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PickupBoardSection;
