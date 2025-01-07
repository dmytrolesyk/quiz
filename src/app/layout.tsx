import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/scss/globals.scss';
import { StoreProvider } from './StoreProvider';
import { fetchConfig } from '@/utils/fetchConfig';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Who wants to be a millionare?',
  description: 'A web app to play "Who wants to be a millionare?"',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initData = await fetchConfig();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider config={{ questions: initData }}>{children}</StoreProvider>
      </body>
    </html>
  );
}
