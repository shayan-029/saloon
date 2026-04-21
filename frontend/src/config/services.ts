export enum ServiceType {
  HAIRCUT_STYLING = 'Haircut & Styling',
  MAKEUP = 'Makeup',
  FACIAL_SKINCARE = 'Facial & Skincare',
  SPA_MASSAGE = 'Spa & Massage',
}

export const SERVICES = [
  {
    type: ServiceType.HAIRCUT_STYLING,
    description: 'Precision cuts and bespoke styling tailored to your unique features.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    price: 'From PKR 2,500',
  },
  {
    type: ServiceType.MAKEUP,
    description: 'Flawless looks for every occasion — from everyday glow to bridal perfection.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    price: 'From PKR 5,000',
  },
  {
    type: ServiceType.FACIAL_SKINCARE,
    description: 'Revitalizing facials and skincare rituals to restore your natural radiance.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    price: 'From PKR 3,500',
  },
  {
    type: ServiceType.SPA_MASSAGE,
    description: 'Indulgent spa treatments and massages to melt away tension and stress.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    price: 'From PKR 4,000',
  },
];

export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00',
];
