'use client';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemIcon, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldButton from '@/components/ui/GoldButton';
import OutlinedGoldButton from '@/components/ui/OutlinedGoldButton';

const PACKAGES = [
  {
    name: 'Basic',
    price: 'PKR 5,000',
    featured: false,
    features: ['Haircut & Blow Dry', 'Basic Facial', 'Manicure', 'Eyebrow Shaping', '1 hour session'],
  },
  {
    name: 'Premium',
    price: 'PKR 12,000',
    featured: true,
    features: ['Haircut & Styling', 'Deep Cleansing Facial', 'Manicure & Pedicure', 'Full Makeup Look', 'Head Massage', '3 hour session'],
  },
  {
    name: 'Bridal',
    price: 'PKR 35,000',
    featured: false,
    features: ['Bridal Makeup & Hairstyle', 'Full Day Spa', 'Facial & Glow Treatment', 'Mani-Pedi', 'Personal Stylist', 'Trial session included'],
  },
];

export default function Pricing() {
  return (
    <Box component="section" id="pricing" sx={{ py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 }, backgroundColor: '#111111' }}>
      <SectionHeading
        overline="Packages"
        title="Pricing"
        subtitle="Transparent pricing, exceptional value. Every package is crafted to deliver a complete luxury experience."
      />
      <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'stretch' }}>
        {PACKAGES.map((pkg, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={pkg.name}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              sx={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: pkg.featured ? '1px solid' : '1px solid transparent',
                  borderColor: pkg.featured ? 'primary.main' : 'transparent',
                  position: 'relative',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { transform: 'translateY(-10px)' }
                }}
              >
                {pkg.featured && (
                  <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'primary.main', color: '#0A0A0A', px: 3, py: 0.5 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>MOST POPULAR</Typography>
                  </Box>
                )}
                <CardContent sx={{ p: 4, pt: pkg.featured ? 6 : 4, flexGrow: 1 }}>
                  <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>{pkg.name}</Typography>
                  <Typography variant="h3" sx={{ mb: 3, fontSize: '2rem' }}>{pkg.price}</Typography>
                  <List disablePadding>
                    {pkg.features.map((f) => (
                      <ListItem key={f} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckIcon sx={{ color: 'primary.main', fontSize: 16 }} />
                        </ListItemIcon>
                        <Typography variant="body2" color="text.secondary">{f}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Box sx={{ p: 4, pt: 0 }}>
                  {pkg.featured
                    ? <GoldButton href="#booking" component="a" fullWidth>Book Now</GoldButton>
                    : <OutlinedGoldButton href="#booking" component="a" fullWidth>Book Now</OutlinedGoldButton>
                  }
                </Box>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
