'use client';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/config/services';

export default function Services() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 }, backgroundColor: 'background.default' }}>
      <SectionHeading
        overline="What We Offer"
        title="Our Services"
        subtitle="Every treatment is a ritual — designed to elevate your natural beauty and restore your sense of self."
      />
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {SERVICES.map((service, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={service.type}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              sx={{ height: '100%' }}
            >
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  'img': {
                    transform: 'scale(1.1)'
                  }
                }
              }}
              >
                <Box sx={{ height: '220px', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={service.image}
                    alt={service.type}
                    sx={{ objectFit: 'cover', transition: 'all 0.3s linear' }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" sx={{ mb: 1 }}>{service.type}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{service.description}</Typography>
                  <Chip label={service.price} size="small" sx={{ color: 'primary.main', borderColor: 'primary.main', border: '1px solid' }} />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
