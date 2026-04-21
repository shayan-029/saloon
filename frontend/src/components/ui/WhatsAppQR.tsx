'use client';
import { Box, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import { WHATSAPP_URL } from '@/config/contact';

export default function WhatsAppQR() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Box sx={{ p: 2, backgroundColor: '#fff', display: 'inline-block' }}>
        <QRCodeSVG value={WHATSAPP_URL} size={140} />
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        Scan to chat on WhatsApp
      </Typography>
    </Box>
  );
}
