'use client';
import { Box, Grid, Typography, Stack, IconButton, Divider, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CONTACT, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/config/contact';
import { QRCodeSVG } from 'qrcode.react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Now', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  {
    icon: <InstagramIcon />,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: <FacebookIcon />,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    icon: <WhatsAppIcon />,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    label: 'WhatsApp',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        pt: { xs: 8, md: 10 },
        pb: 4,
        px: { xs: 3, md: 8 },
      }}
    >
      <Grid container spacing={{ xs: 6, md: 8 }}>
        {/* Brand column */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'var(--font-cormorant), serif',
                color: 'primary.main',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Luxe Salon & SPA
            </Typography>
            <Box
              sx={{
                width: 40,
                height: 1,
                backgroundColor: 'primary.main',
                mb: 2.5,
              }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280, lineHeight: 1.9 }}>
              Where beauty meets luxury. Bespoke beauty rituals crafted for the modern connoisseur in the heart of Lahore.
            </Typography>
          </Box>

          <Stack direction="row" sx={{ gap: 1, mt: 3.5 }}>
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <IconButton
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  border: '1px solid rgba(201,168,76,0.3)',
                  color: 'primary.main',
                  borderRadius: 0,
                  width: 40,
                  height: 40,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#0A0A0A',
                    borderColor: 'primary.main',
                  },
                  transition: 'all 0.25s ease',
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Grid>

        {/* Quick links */}
        <Grid size={{ xs: 6, md: 2.5 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
              mb: 3,
            }}
          >
            Quick Links
          </Typography>
          <Stack sx={{ gap: 1.5 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                underline="none"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {label}
              </Link>
            ))}
          </Stack>
        </Grid>

        {/* Working hours */}
        <Grid size={{ xs: 6, md: 2.5 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
              mb: 3,
            }}
          >
            Hours
          </Typography>
          <Stack sx={{ gap: 1.5 }}>
            {[
              { days: 'Mon – Fri', time: '9:00 AM – 8:00 PM' },
              { days: 'Saturday', time: '9:00 AM – 9:00 PM' },
              { days: 'Sunday', time: '10:00 AM – 6:00 PM' },
            ].map(({ days, time }) => (
              <Box key={days}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  {days}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(201,168,76,0.75)', fontSize: '0.8rem' }}>
                  {time}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* Contact info */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
              mb: 3,
            }}
          >
            Contact
          </Typography>
          <Stack sx={{ gap: 2.5 }}>
            {[
              { icon: <PhoneIcon sx={{ fontSize: 16 }} />, value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
              { icon: <EmailIcon sx={{ fontSize: 16 }} />, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: <LocationOnIcon sx={{ fontSize: 16 }} />, value: CONTACT.address, href: '#contact' },
            ].map(({ icon, value, href }) => (
              <Stack key={value} direction="row" sx={{ gap: 1.5, alignItems: 'flex-start' }}>
                <Box sx={{ color: 'primary.main', mt: 0.15, flexShrink: 0 }}>{icon}</Box>
                <Link
                  href={href}
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    transition: 'color 0.2s ease',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {value}
                </Link>
              </Stack>
            ))}
            {/* WhatsApp QR Code */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: { xs: 7, md: 9 },
                mb: 5,
                gap: 2,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontSize: '0.72rem',
                }}
              >
                Chat on WhatsApp
              </Typography>
              <Box
                component="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 1.5,
                  border: '1px solid rgba(201,168,76,0.35)',
                  backgroundColor: '#fff',
                  display: 'inline-block',
                  transition: 'border-color 0.25s ease',
                  '&:hover': { borderColor: 'rgba(201,168,76,0.8)' },
                }}
              >
                <QRCodeSVG value={WHATSAPP_URL} size={140} />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem' }}>
                Scan to open WhatsApp chat
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: 'rgba(201,168,76,0.15)', mb: 4 }} />

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ justifyContent: 'space-between', alignItems: 'center', gap: 2 }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem' }}>
          © {year} Luxe Salon & Spa. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem' }}>
          Crafted with elegance in Lahore, Pakistan
        </Typography>
      </Stack>
    </Box>
  );
}
