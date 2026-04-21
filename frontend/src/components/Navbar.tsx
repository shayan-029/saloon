'use client';
import {
  AppBar, Box, Toolbar, Typography, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  useScrollTrigger, Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import GoldButton from '@/components/ui/GoldButton';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Logo({ small = false }: { small?: boolean }) {
  const size = small ? 32 : 40;
  return (
    <Box component="a" href="#home" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1.25 }}>
      {/* Scissors mark */}
      <Box
        component="svg"
        viewBox="0 0 40 40"
        sx={{ width: size, height: size, flexShrink: 0 }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diamond frame */}
        <rect x="5" y="5" width="30" height="30" rx="2" stroke="#C9A84C" strokeWidth="1.2" fill="none" transform="rotate(45 20 20)" />
        {/* Scissors blades */}
        <circle cx="13" cy="15" r="3" stroke="#C9A84C" strokeWidth="1.3" fill="none" />
        <circle cx="13" cy="25" r="3" stroke="#C9A84C" strokeWidth="1.3" fill="none" />
        <line x1="15.8" y1="16.8" x2="28" y2="22" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="15.8" y1="23.2" x2="28" y2="18" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 700,
            fontSize: small ? '1.15rem' : '1.45rem',
            letterSpacing: '0.1em',
            color: '#FAFAFA',
            lineHeight: 1,
          }}
        >
          LUXE
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-raleway), sans-serif',
            fontWeight: 400,
            fontSize: '0.48rem',
            letterSpacing: '0.38em',
            color: '#C9A84C',
            lineHeight: 1,
            mt: '3px',
          }}
        >
          SALON & SPA
        </Typography>
      </Box>
    </Box>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    // small delay so drawer closes before scroll
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.18)' : 'none',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 5 }, py: 1, minHeight: { xs: 64, md: 72 } }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>

          {/* Desktop nav links */}
          <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4, mr: 4 }}>
            {NAV_LINKS.map((link) => (
              <Box
                key={link.label}
                component="button"
                onClick={() => handleNavClick(link.href)}
                sx={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-raleway), sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,250,250,0.8)',
                  p: 0,
                  position: 'relative',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#C9A84C' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: '1px',
                    backgroundColor: '#C9A84C',
                    transition: 'width 0.25s ease',
                  },
                  '&:hover::after': { width: '100%' },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* CTA — desktop */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <GoldButton size="small" onClick={() => handleNavClick('#booking')}>
              Book Now
            </GoldButton>
          </Box>

          {/* Hamburger — mobile */}
          <IconButton
            edge="end"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#FAFAFA', ml: 1 }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              backgroundColor: '#0A0A0A',
              borderLeft: '1px solid rgba(201,168,76,0.2)',
              px: 2,
              py: 3,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, px: 1 }}>
          <Logo small />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#FAFAFA' }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List disablePadding>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link.href)}
                sx={{
                  py: 1.5,
                  borderBottom: '1px solid rgba(201,168,76,0.1)',
                  '&:hover': { backgroundColor: 'rgba(201,168,76,0.06)' },
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontFamily: 'var(--font-raleway), sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(250,250,250,0.85)',
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4, px: 1 }}>
          <GoldButton fullWidth onClick={() => handleNavClick('#booking')}>
            Book Appointment
          </GoldButton>
        </Box>
      </Drawer>
    </>
  );
}
