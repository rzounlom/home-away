import './globals.css';

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HomeAway',
  description: 'Feel at home, away from home.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
        <Navbar />
        <main className='container py-10'>{children}</main>
        </Providers>
      </body>
    </html>
    </ClerkProvider>

  );
}
