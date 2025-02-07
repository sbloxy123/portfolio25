import type { Metadata } from 'next';
import { Italiana, Anonymous_Pro, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { TitleNavProvider } from '@/contexts/TitleNavContext';
import Footer from '@/components/Footer';
import { ScrollArrow } from '@/components/ScrollArrow';

const italiana = Italiana({
  variable: '--font-italiana',
  subsets: ['latin'],
  weight: '400',
});

const anonymousPro = Anonymous_Pro({
  variable: '--font-anonymous-pro',
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Stuart Bloxham',
  description: 'Portfolio built by Stuart Bloxham, with Next.js and Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${italiana.variable} ${anonymousPro.variable} ${inter.variable} relative antialiased`}
      >
        <TitleNavProvider>
          <Navbar />
          <ScrollArrow />

          <div className="pattern__bg fixed right-0 top-[101px] -z-10 h-[700px] w-[400px]">
            <div className="pattern__overlay"></div>
            <svg width="100%" height="100%">
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle id="pattern-circle" cx="5" cy="5" r="5" fill="#5eead4" />
              </pattern>

              <rect
                id="rect"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
                opacity="0.04"
                className="animate-pulse-half"
                // also see animate-pulse-half in tailwind config
              />
            </svg>
          </div>
          {children}
        </TitleNavProvider>
        <Footer />
      </body>
    </html>
  );
}
