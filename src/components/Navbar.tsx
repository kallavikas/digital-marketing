import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  
  const webPageName = 'Vizion';

  const navItems = [
    { title: 'Services', path: '/services' },
    { title: 'Solutions', path: '/solutions' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'About Us', path: '/about' },
  ];

  return (
    <>
      <AppBar position="fixed" color="default" elevation={2}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo - Desktop */}
            <Box
              component={Link}
              href="/"
              sx={{
                mr: 4,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Image
                src="/Logo.svg"
                alt="Vizion Logo"
                width={40}
                height={40}
                style={{ marginRight: '8px' }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                }}
              >
                {webPageName}
              </Typography>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                TransitionComponent={Fade}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.title}
                    onClick={handleCloseMenu}
                    component={Link}
                    href={item.path}
                  >
                    <Typography textAlign="center">{item.title}</Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={handleCloseMenu}
                  component={Link}
                  href="/contact"
                  sx={{ color: 'primary.main' }}
                >
                  <Typography textAlign="center">Contact Us</Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/* Logo - Mobile */}
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              {webPageName}
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  component={Link}
                  href={item.path}
                  sx={{ 
                    my: 2, 
                    color: 'text.primary',
                    display: 'block',
                    mx: 1,
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  {item.title}
                </Button>
              ))}
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  my: 2,
                  mx: 1,
                  display: 'block',
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar; 