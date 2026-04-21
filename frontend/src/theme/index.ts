import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const luxuryTheme = createTheme({
  palette,
  typography,
  components,
  shape: { borderRadius: 0 },
  spacing: 8,
});
