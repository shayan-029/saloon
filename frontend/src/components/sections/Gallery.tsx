'use client';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Bridal makeup' },
  { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', alt: 'Hair styling' },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', alt: 'Facial treatment' },
  { src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80', alt: 'Nail art' },
  { src: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?w=600&q=80', alt: 'Spa massage' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Color treatment' },
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', alt: 'Blow dry' },
  { src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80', alt: 'Skincare' },
];

export default function Gallery() {
  return (
    <Box component="section" id="gallery" sx={{ py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 }, backgroundColor: 'background.default' }}>
      <SectionHeading
        overline="Our Work"
        title="Portfolio"
        subtitle="A glimpse into the transformations we've crafted for our clients."
      />
      <Grid container spacing={2}>
        {GALLERY_IMAGES.map((img, i) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={img.alt}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '3/4',
                cursor: 'pointer',
                '&:hover .overlay': { opacity: 1 },
                '&:hover img': { transform: 'scale(1.06)' },
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.45s ease' }}
                sizes="(max-width: 600px) 50vw, 25vw"
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute', inset: 0,
                  backgroundColor: 'rgba(201,168,76,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transition: 'opacity 0.35s ease',
                }}
              >
                <Typography variant="subtitle1" sx={{ color: '#fff', letterSpacing: '0.2em' }}>
                  {img.alt}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
