import { Box, Typography } from '@mui/material';

interface Props {
  overline?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ overline, title, subtitle }: Props) {
  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      {overline && (
        <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
          {overline}
        </Typography>
      )}
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
        {title}
      </Typography>
      <Box sx={{ width: 60, height: 2, backgroundColor: 'primary.main', mx: 'auto', mb: subtitle ? 3 : 0 }} />
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
