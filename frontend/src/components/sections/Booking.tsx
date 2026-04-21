'use client';
import {
  Box, Grid, Typography, TextField, MenuItem, Stack,
  Dialog, DialogContent, DialogTitle, IconButton, Alert,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import dayjs, { Dayjs } from 'dayjs';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldButton from '@/components/ui/GoldButton';
import OutlinedGoldButton from '@/components/ui/OutlinedGoldButton';
import { SERVICES, ServiceType, TIME_SLOTS } from '@/config/services';
import { WHATSAPP_URL } from '@/config/contact';
import { createAppointment } from '@/lib/api';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email'),
  service: z.nativeEnum(ServiceType),
  date: z.custom<Dayjs>((v) => dayjs.isDayjs(v) && v.isValid(), 'Select a valid date'),
  time: z.string().min(1, 'Select a time'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Booking() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const { control, register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: ServiceType.HAIRCUT_STYLING, time: '' },
  });

  const onSubmit = async (data: FormData) => {
    setServerError('');
    try {
      await createAppointment({ ...data, date: data.date.format('YYYY-MM-DD') });
      reset();
      setSuccess(true);
    } catch (e: unknown) {
      setServerError(e instanceof Error ? e.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <Box component="section" id="booking" sx={{ py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 }, backgroundColor: '#111111' }}>
      <SectionHeading
        overline="Reserve Your Spot"
        title="Book an Appointment"
        subtitle="Fill in your details and we'll confirm your booking within 24 hours."
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        sx={{ maxWidth: 800, mx: 'auto' }}
      >
        {serverError && <Alert severity="error" sx={{ mb: 3 }}>{serverError}</Alert>}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack sx={{ gap: 3 }} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth label="Full Name" required
                  {...register('name')}
                  error={!!errors.name} helperText={errors.name?.message}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth label="Phone Number" required placeholder="+92 300 000 0000"
                  {...register('phone')}
                  error={!!errors.phone} helperText={errors.phone?.message}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth label="Email Address" type="email" required
                  {...register('email')}
                  error={!!errors.email} helperText={errors.email?.message}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="service"
                  control={control}
                  render={({ field }) => (
                    <TextField fullWidth select label="Service" required {...field} error={!!errors.service} helperText={errors.service?.message}>
                      {SERVICES.map((s) => (
                        <MenuItem key={s.type} value={s.type}>{s.type}</MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Preferred Date"
                      disablePast
                      value={field.value ?? null}
                      onChange={field.onChange}
                      slotProps={{ textField: { fullWidth: true, required: true, error: !!errors.date, helperText: errors.date?.message } }}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="time"
                  control={control}
                  render={({ field }) => (
                    <TextField fullWidth select label="Preferred Time" required {...field} error={!!errors.time} helperText={errors.time?.message}>
                      {TIME_SLOTS.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth label="Additional Message" multiline rows={4} placeholder="Any special requests or notes..."
                  {...register('message')}
                />
              </Grid>
            </Grid>
            <GoldButton type="submit" size="large" disabled={isSubmitting} sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' } }}>
              {isSubmitting ? 'Booking...' : 'Confirm Booking'}
            </GoldButton>
          </Stack>
        </LocalizationProvider>
      </Box>

      <Dialog
        open={success}
        onClose={() => setSuccess(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{ paper: { sx: { backgroundColor: 'background.paper', borderRadius: 0 } } }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5">Booking Confirmed!</Typography>
          <IconButton onClick={() => setSuccess(false)} size="small"><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Thank you for booking with Luxe Salon. We&apos;ll confirm your appointment within 24 hours.
            In the meantime, feel free to reach us directly on WhatsApp.
          </Typography>
          <Box component="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" sx={{ display: 'block' }}>
            <OutlinedGoldButton startIcon={<WhatsAppIcon />} fullWidth component="span">
              Continue on WhatsApp
            </OutlinedGoldButton>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
