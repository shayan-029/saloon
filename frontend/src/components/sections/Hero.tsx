'use client';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GoldButton from '@/components/ui/GoldButton';
import OutlinedGoldButton from '@/components/ui/OutlinedGoldButton';

export default function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85"
        alt="Luxe Salon interior"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.58)' }} />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        sx={{ position: 'relative', zIndex: 1, textAlign: 'center', px: { xs: 3, md: 6 }, maxWidth: 800 }}
      >
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ mb: 2, letterSpacing: '0.3em' }}
        >
          Premium Beauty & Wellness
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '6rem' }, lineHeight: 1.05, mb: 3 }}
        >
          Where Beauty Meets Luxury
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, mb: 5, maxWidth: 520, mx: 'auto' }}
        >
          Indulge in bespoke beauty rituals crafted for the modern connoisseur.
        </Typography>
        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
          <GoldButton href="#booking" component="a" size="large">
            Book Appointment
          </GoldButton>
          <OutlinedGoldButton href="#services" component="a" size="large">
            Our Services
          </OutlinedGoldButton>
        </Stack>
      </Box>
    </Box>
  );
}
