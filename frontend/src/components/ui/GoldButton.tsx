'use client';
import { Button, ButtonProps } from '@mui/material';

export default function GoldButton({ children, ...props }: ButtonProps) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
}
