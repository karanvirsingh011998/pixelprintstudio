import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pixel Print Studios - Premium Printing Solutions',
  description: 'Professional printing and corporate gifting services for your business needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Best Printing Services | Pixel Print Studios</title>
        <meta name="description" content="We offer top-quality printing services for businesses and individuals. Get high-quality prints at affordable prices." />

         {/* Meta Keywords */}
         <meta 
          name="keywords" 
          content="printing services, custom printing, online printing services, digital printing, offset printing, bulk printing services, business printing solutions, corporate printing services, business card printing, brochure printing, flyer printing, catalog printing, letterhead printing, office stationery printing, custom packaging printing, branded packaging solutions, promotional material printing, marketing material printing, event banner printing, custom sticker printing, label printing services, corporate gifting solutions, customized corporate gifts, luxury corporate gifts, business gifts for clients, branded corporate gifts, personalized corporate gifts, bulk corporate gifts, premium business gifts, festive corporate gifting, employee appreciation gifts, eco-friendly printing services, sustainable corporate gifts, biodegradable packaging printing, organic corporate gifts, green promotional products, printing services in [Your City], corporate gifting suppliers in [Your City], best business printing in [Your City], custom packaging printing near me" 
        />

        {/* Robots (For Indexing) */}
        <meta name="robots" content="index, follow" />

        <meta name="author" content="Pixel Print Studios | Karanvir Singh" />
        <link rel="icon" href="/assets/images/logo.png" sizes="any" />
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}