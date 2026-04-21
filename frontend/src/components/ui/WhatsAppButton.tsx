'use client';
import { useState } from 'react';
import { Box, Fab, Typography, Paper, IconButton, Collapse, Avatar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import { WHATSAPP_NUMBER } from '@/config/contact';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1300, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1.5 }}>
      {/* Chat popup */}
      <Collapse in={open} timeout={250} unmountOnExit>
        <Paper
          elevation={8}
          sx={{
            width: 300,
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              px: 2,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Avatar sx={{ width: 40, height: 40, bgcolor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)' }}>
              <WhatsAppIcon sx={{ fontSize: 22, color: '#fff' }} />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem', lineHeight: 1.2 }}>
                Luxe Salon & Spa
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.25 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#a5f3a5' }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.7rem' }}>
                  Typically replies in minutes
                </Typography>
              </Box>
            </Box>
            <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: '#fff' }} aria-label="Close chat">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Chat body */}
          <Box sx={{ px: 2, py: 2, backgroundColor: '#ECE5DD', minHeight: 100 }}>
            {/* Incoming bubble */}
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <Avatar sx={{ width: 28, height: 28, bgcolor: '#25D366', flexShrink: 0, mt: 0.25 }}>
                <WhatsAppIcon sx={{ fontSize: 16, color: '#fff' }} />
              </Avatar>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '0 12px 12px 12px',
                  px: 1.5,
                  py: 1,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  maxWidth: 220,
                }}
              >
                <Typography sx={{ fontSize: '0.8rem', color: '#111', lineHeight: 1.5 }}>
                  Hello! 👋 Welcome to Luxe Salon & Spa. How can we help you today?
                </Typography>
                <Typography sx={{ fontSize: '0.62rem', color: '#888', textAlign: 'right', mt: 0.5 }}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Open chat CTA */}
          <Box
            onClick={() => window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              backgroundColor: '#25D366',
              color: '#fff',
              py: 1.5,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              '&:hover': { backgroundColor: '#1da851' },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 18 }} />
            <Typography sx={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em' }}>
              Open Chat
            </Typography>
          </Box>
        </Paper>
      </Collapse>

      {/* FAB */}
      <Fab
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        sx={{
          backgroundColor: '#25D366',
          color: '#fff',
          '&:hover': { backgroundColor: '#1da851', transform: 'scale(1.08)' },
          transition: 'background-color 0.2s, transform 0.2s',
        }}
      >
        {open ? <CloseIcon /> : <WhatsAppIcon />}
      </Fab>
    </Box>
  );
}
