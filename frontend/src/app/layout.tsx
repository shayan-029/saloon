import type { Metadata } from 'next';
import { Cormorant_Garamond, Raleway } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luxe Salon — Premium Beauty & Wellness',
  description: 'Book appointments for haircuts, makeup, facials, and spa treatments at Luxe Salon.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`} suppressHydrationWarning style={{ scrollBehavior: 'smooth', overflowX: 'hidden' }}>
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <WhatsAppButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
