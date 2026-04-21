'use client';
import { Box, Grid, Typography, Avatar, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';

const STATS = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '8,000+', label: 'Happy Clients' },
  { value: '25+', label: 'Expert Stylists' },
  { value: '15+', label: 'Industry Awards' },
];

const TEAM = [
  { name: 'Sara Khan', role: 'Lead Stylist & Creative Director', avatar: 'https://i.pravatar.cc/150?img=47' },
  { name: 'Ayesha Malik', role: 'Senior Makeup Artist', avatar: 'https://i.pravatar.cc/150?img=48' },
  { name: 'Nadia Hussain', role: 'Skincare & Facial Specialist', avatar: 'https://i.pravatar.cc/150?img=49' },
];

export default function AboutUs() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 }, backgroundColor: '#111111' }}>
      <SectionHeading overline="Our Story" title="About Luxe Salon" />

      <Grid container spacing={8} sx={{ alignItems: 'center', mb: 10 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ mb: 3 }}>A Decade of Crafting Confidence</Typography>
            <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
              Founded in 2012, Luxe Salon was born from a vision to redefine beauty experiences in Pakistan.
              We believe every visit should feel like a retreat — where skilled hands, premium products, and
              a serene atmosphere converge to bring out your most radiant self.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
              Our team of internationally trained artists brings global trends to your doorstep, combining
              cutting-edge techniques with a deeply personal approach to beauty.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={3}>
            {STATS.map((stat, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={stat.label}>
                <Box sx={{
                  transition: 'all 0.3s linear',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="h3" color="primary" sx={{ fontSize: '2.5rem', mb: 0.5 }}>{stat.value}</Typography>
                    <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <GoldDivider />

      <Typography variant="h4" sx={{ textAlign: 'center', mb: 6 }}>Meet Our Team</Typography>
      <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: 4, justifyContent: 'center' }}>
        {TEAM.map((member, i) => (
          <Box
            component={motion.div}
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            sx={{ textAlign: 'center', flex: '1 1 200px', maxWidth: 240, mx: 'auto' }}
          >
            <Avatar src={member.avatar} alt={member.name} sx={{ width: 100, height: 100, mx: 'auto', mb: 2, border: '2px solid', borderColor: 'primary.main' }} />
            <Typography variant="h6">{member.name}</Typography>
            <Typography variant="body2" color="text.secondary">{member.role}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
