'use client';
import { Box, Card, CardContent, Typography, Avatar, Rating, Stack, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SectionHeading from '@/components/ui/SectionHeading';

const REVIEWS = [
  { name: 'Fatima Zahra', rating: 5, avatar: 'https://i.pravatar.cc/80?img=20', text: 'Absolutely transformed! The bridal package was worth every rupee. Sara and her team made me feel like royalty on my wedding day.' },
  { name: 'Hira Baig', rating: 5, avatar: 'https://i.pravatar.cc/80?img=25', text: 'I\'ve been coming here for two years. The atmosphere is so calming and the results are consistently flawless. My go-to salon.' },
  { name: 'Mahnoor Siddiqui', rating: 5, avatar: 'https://i.pravatar.cc/80?img=32', text: 'The facial treatment was phenomenal — my skin has never looked better. The team is knowledgeable and genuinely caring.' },
  { name: 'Zara Ahmed', rating: 4, avatar: 'https://i.pravatar.cc/80?img=38', text: 'Premium experience from start to finish. The decor, the service, the results — everything screams luxury. Highly recommend!' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => { setDirection(-1); setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length); };
  const next = () => { setDirection(1); setIndex((i) => (i + 1) % REVIEWS.length); };

  const review = REVIEWS[index];

  return (
    <Box component="section" id="testimonials" sx={{ py: { xs: 10, md: 14 }, px: { xs: 3, md: 8 }, backgroundColor: 'background.default' }}>
      <SectionHeading overline="Client Love" title="Testimonials" />
      <Box sx={{ maxWidth: 720, mx: 'auto', position: 'relative' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <Box
            key={index}
            component={motion.div}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.4 }}
          >
            <Card sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h4" sx={{ fontStyle: 'italic', mb: 4, fontSize: { xs: '1.3rem', md: '1.6rem' }, lineHeight: 1.7 }}>
                  &ldquo;{review.text}&rdquo;
                </Typography>
                <Rating value={review.rating} readOnly sx={{ color: 'primary.main', mb: 2 }} />
                <Stack sx={{ flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                  <Avatar src={review.avatar} alt={review.name} sx={{ border: '2px solid', borderColor: 'primary.main' }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{review.name}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </AnimatePresence>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: 2, mt: 4 }}>
          <IconButton onClick={prev} sx={{ border: '1px solid', borderColor: 'primary.main', color: 'primary.main', '&:hover': { backgroundColor: 'rgba(201,168,76,0.1)' } }}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={next} sx={{ border: '1px solid', borderColor: 'primary.main', color: 'primary.main', '&:hover': { backgroundColor: 'rgba(201,168,76,0.1)' } }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
