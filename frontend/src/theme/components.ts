import { Components, Theme } from '@mui/material';

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        padding: '12px 32px',
        '&:focus-visible': { outline: '2px solid #C9A84C', outlineOffset: '2px' },
      },
      contained: {
        backgroundColor: '#C9A84C',
        color: '#0A0A0A',
        '&:hover': { backgroundColor: '#E8C97A' },
      },
      outlined: {
        borderColor: '#C9A84C',
        color: '#C9A84C',
        '&:hover': { borderColor: '#E8C97A', color: '#E8C97A', backgroundColor: 'rgba(201,168,76,0.05)' },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: '#1C1C1C',
        borderRadius: 0,
        border: '1px solid transparent',
        transition: 'border-color 0.3s ease',
        '&:hover': { borderColor: 'rgba(201,168,76,0.4)' },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#C9A84C' },
        },
        '& .MuiInputLabel-root.Mui-focused': { color: '#C9A84C' },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: { borderColor: 'rgba(201,168,76,0.25)' },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: 0 },
    },
  },
};
