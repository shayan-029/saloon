import type { ThemeOptions } from '@mui/material/styles';

type TypographyOptions = NonNullable<ThemeOptions['typography']>;

export const typography: TypographyOptions = {
  fontFamily: '"Raleway", sans-serif',
  h1: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, letterSpacing: '-0.02em' },
  h2: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, letterSpacing: '-0.01em' },
  h3: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 },
  h4: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 },
  h5: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 400 },
  h6: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 400 },
  subtitle1: { fontFamily: '"Raleway", sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.75rem' },
  button: { fontFamily: '"Raleway", sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 },
};
