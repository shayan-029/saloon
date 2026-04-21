'use client';
import { Fab, Tooltip, Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WHATSAPP_NUMBER } from '@/config/contact';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <Tooltip
      title={
        <Box sx={{ textAlign: 'center', py: 0.5 }}>
          <Typography variant="caption" sx={{ display: 'block', fontWeight: 600, letterSpacing: '0.05em' }}>
            Chat with us
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', color: '#25D366', fontWeight: 700 }}>
            +{WHATSAPP_NUMBER}
          </Typography>
        </Box>
      }
      placement="left"
      arrow
    >
      <Fab
        onClick={handleClick}
        aria-label={`Chat on WhatsApp: +${WHATSAPP_NUMBER}`}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1300,
          backgroundColor: '#25D366',
          color: '#fff',
          '&:hover': { backgroundColor: '#1da851', transform: 'scale(1.08)' },
          transition: 'background-color 0.2s, transform 0.2s',
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  );
}
