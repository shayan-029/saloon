import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/config/contact';

export function getWhatsAppUrl(): string {
  const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(
    typeof navigator !== 'undefined' ? navigator.userAgent : '',
  );
  // whatsapp:// deep-links directly into the installed app on mobile
  return isMobile
    ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encoded}`
    : `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
