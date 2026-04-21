'use client';
import { Box, Grid, Typography, TextField, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldButton from '@/components/ui/GoldButton';
import { CONTACT, WHATSAPP_NUMBER } from '@/config/contact';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const INFO_ITEMS = [
  { icon: <PhoneIcon sx={{ color: 'primary.main' }} />, label: 'Phone', value: CONTACT.phone },
  { icon: <EmailIcon sx={{ color: 'primary.main' }} />, label: 'Email', value: CONTACT.email },
  { icon: <LocationOnIcon sx={{ color: 'primary.main' }} />, label: 'Address', value: CONTACT.address },
];

export default function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 }, backgroundColor: 'background.default' }}>
      <SectionHeading overline="Get In Touch" title="Contact Us" />
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Stack sx={{ gap: 4, mb: 5 }}>
              {INFO_ITEMS.map((item) => (
                <Stack key={item.label} sx={{ flexDirection: 'row', gap: 2, alignItems: 'flex-start' }}>
                  <Box sx={{ mt: 0.3 }}>{item.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" color="primary" sx={{ mb: 0.3 }}>{item.label}</Typography>
                    <Typography color="text.secondary">{item.value}</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>

            {/* WhatsApp click-to-chat */}
            <Box
              sx={{
                border: '1px solid rgba(201,168,76,0.25)',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center' }}>
                <WhatsAppIcon sx={{ color: '#25D366', fontSize: 28 }} />
                <Box>
                  <Typography variant="subtitle1" color="primary" sx={{ lineHeight: 1 }}>WhatsApp Us</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.3 }}>
                    +{WHATSAPP_NUMBER}
                  </Typography>
                </Box>
              </Stack>
              <Button
                onClick={() => window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer')}
                startIcon={<WhatsAppIcon />}
                fullWidth
                sx={{
                  backgroundColor: '#25D366',
                  color: '#fff',
                  borderRadius: 0,
                  fontFamily: 'var(--font-raleway), sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  py: 1.5,
                  '&:hover': { backgroundColor: '#1da851' },
                }}
              >
                Open Chat
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>Send a Message</Typography>
            <Stack sx={{ gap: 3 }} component="form" onSubmit={(e:any) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Your Name" required />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Email Address" type="email" required />
                </Grid>
              </Grid>
              <TextField fullWidth label="Message" multiline rows={5} required />
              <GoldButton type="submit" sx={{ alignSelf: 'flex-start' }}>Send Message</GoldButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
