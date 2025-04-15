import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './Header.css';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: 'ראשי', link: '/' },
    { label: 'עמוד מוצר', link: '/product' },
    { label: 'בלוג', link: '/blog' },
    { label: 'הזמנה', link: '/order' },
    { label: 'מילואימניקים מפרגנים', link: '/blog' },
  ];

  return (
    <AppBar position="static" className="main-header">
      <Toolbar className="header-toolbar">

        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="pakal" className="logo-img" />
        </a>


        {!isMobile && (
          <Box className="nav-links">
            {menuItems.map((item, index) => (
              <MuiLink key={index} href={item.link} underline="none" className="nav-link">
                {item.label}
              </MuiLink>
            ))}
            <Button
              variant="contained"
              href="/order"
              className="nav-button"
            >
              בניית חופשה
            </Button>
          </Box>
        )}


        {isMobile && (
          <>
            <IconButton edge="end" color="contained" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(true)}
            >
              <Box sx={{ width: 250, direction: 'rtl' }}>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem
                      button
                      key={index}
                      component="a"
                      href={item.link}
                      sx={{ justifyContent: 'center' }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{ textAlign: 'center' }}
                      />
                    </ListItem>
                  ))}
                  <ListItem sx={{ justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      fullWidth
                      href="https://example.com/vacation"
                      className="nav-button"
                      sx={{ mt: 2 }}
                    >
                      בניית חופשה
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
