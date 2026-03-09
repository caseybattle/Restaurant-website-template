import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';
import SmoothScroller from '@/components/SmoothScroller';
import CustomCursor from '@/components/CustomCursor';
import FilmGrain from '@/components/FilmGrain';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Texas Taste | Authentic American Flavors',
  description: 'A new American restaurant in Texas offering barbecue ribs, steak, burgers, and more.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-200 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200" suppressHydrationWarning>
        <FilmGrain />
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
        <SmoothScroller>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          <main>{children}</main>
          <ClientOnly>
            <Footer />
          </ClientOnly>
        </SmoothScroller>
      </body>
    </html>
  );
}
