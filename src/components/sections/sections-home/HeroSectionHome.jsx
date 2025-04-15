import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import FloatingShapes from '../../effects/FloatingShapes';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: '#002233',
        color: '#fff',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        direction: 'rtl',
        py: { xs: 6, md: 3 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} >   
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="#ccc" mb={1}>
              לוחם איסוף זולול בשיתוף עם <b>Cal</b>
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#fcecc4',
                fontSize: { xs: '3rem', md: '4rem' },
                lineHeight: 1.4,
              }}
            >
              ניצול שובר מילואים <br />לחופשה <b>שלמה ומפנקת</b>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#ccc',
                mb: 4,
                lineHeight: 2,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              לוחם איסוף זולול סיט אמת, קונסקטור אדיפיסינג אלית. <br />
              הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. <br />
              זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק.
            </Typography>
          
            <Stack direction="row" spacing={2}   sx={{ gap: '6px', flexWrap: 'wrap' }}>
              <Button
                href="/order"
                variant="contained"
                size="large"
                startIcon={<Inventory2Icon />}
                sx={{
                  borderRadius: '30px',
                  backgroundColor: '#4dabf7',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  '&:hover': { backgroundColor: '#339af0' },
                }}
              >
                בניית חופשה מפנקת
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<InfoIcon />}
                href="/blog"
                sx={{
                  borderRadius: '50px',
                  color: '#4dabf7',
                  borderColor: '#4dabf7',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                    borderColor: '#4dabf7',
                  },
                }}
              >
                למד/י עוד
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2} >
            
            <Box
              component="img"
              src="/app-banner-img.png"
              alt="Hero Phone"
              sx={{
                width: '100%',
                maxWidth: 500,
                objectFit: 'contain',
                mx: 'auto',
               mt: { xs: -14, md: -20 }
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <FloatingShapes />
    </Box>
  );
};

export default HeroSection;
