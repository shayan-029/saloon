export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923266774586';
export const WHATSAPP_MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? 'Hi, I want to book an appointment at Luxe Salon & Spa.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT = {
  phone: '+92 3266774586',
  email: 'shayanmalik776@gmail.com',
  address: 'gulshan ravi Lahore, Pakistan',
};
