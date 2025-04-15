import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn, ArrowBackIos } from '@mui/icons-material';

const footerLinks = [
  'לוחם איסוף',
  'לוחם איסוף',
  'לוחם איסוף',
  'לוחם איסוף',
  'לוחם איסוף',
  'לוחם איסוף'
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#062b3f', color: '#fff', direction: 'rtl', pt: 10 }}>

      <Box
        sx={{
          backgroundImage: 'url(/bg-footer.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 4,
          mx: 'auto',
          width: { xs: '90%', md: '70%' },
          py: 6,
          px: 4,
          mb: 6,
          textAlign: 'right',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
          לורם איסוף
        </Typography>
        <Typography variant="body1" color="white">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" px={{ xs: 3, md: 12 }}>
      <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" mb={2}>
            <img src="/logo-white.png" alt="logo-white" style={{ height: 50 }} />
          </Box>
          <Typography variant="body2" color="#ccc" textAlign="center" px={1}>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. קלארי הנובש שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <IconButton href="#" sx={{ color: '#fff' }}><Facebook /></IconButton>
            <IconButton href="#" sx={{ color: '#fff' }}><Twitter /></IconButton>
            <IconButton href="#" sx={{ color: '#fff' }}><Instagram /></IconButton>
            <IconButton href="#" sx={{ color: '#fff' }}><LinkedIn /></IconButton>
          </Box>
        </Grid>
        {[1, 2].map((col) => (
          <Grid item xs={12} md={3} key={col}>
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              לוחם איסוף
            </Typography>
            {footerLinks.map((text, i) => (
              <Box key={i} display="flex" alignItems="center" mb={1}>
                <ArrowBackIos fontSize="small" sx={{ transform: 'rotate(180deg)', ml: 1 }} />
                <Link href="#" color="inherit" underline="none">
                  {text}
                </Link>
              </Box>
            ))}
          </Grid>
        ))}


      
      </Grid>

      <Box sx={{ textAlign: 'center', py: 4, fontSize: 14, color: '#aaa' }}>
        © כל הזכויות שמורות לפק"ל חופש 2025
      </Box>
    </Box>
  );
};

export default Footer;