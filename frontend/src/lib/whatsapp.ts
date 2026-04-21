import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/config/contact';

export function getWhatsAppUrl(): string {
  const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
  // wa.me redirects to the app on mobile and WhatsApp Web on desktop,
  // landing directly on the owner's chat — no contact-save required.
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
}
