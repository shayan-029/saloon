'use client';
import { Button, ButtonProps } from '@mui/material';

export default function OutlinedGoldButton({ children, ...props }: ButtonProps) {
  return (
    <Button variant="outlined" color="primary" {...props}>
      {children}
    </Button>
  );
}
