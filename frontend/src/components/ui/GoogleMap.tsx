'use client';
import { Box } from '@mui/material';

interface GoogleMapProps {
  address?: string;
  height?: number | string;
}

export default function GoogleMap({ address = 'gulshan ravi Lahore Pakistan', height = 380 }: GoogleMapProps) {
  const query = encodeURIComponent(address);

  return (
    <Box
      sx={{
        width: '100%',
        height,
        border: '1px solid rgba(201,168,76,0.25)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <iframe
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width='100%'
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}
