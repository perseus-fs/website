import { Particles } from '@/components/particles';
import { Topbar } from '@/components/topbar';
import cx from 'classnames';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'PerseusFS',
  description: 'A lightweight, simplified, self-hosted file storage solution',
  keywords: [
    'file storage',
    'self-hosted',
    'lightweight',
    'simplified',
    'bun',
    'nextjs',
    'react',
    'perseusfs'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="A lightweight, simplified, self-hosted file storage solution."
          key="desc"
        />
      </Head>
      <body
        className={cx(
          geistSans.variable,
          geistMono.variable,
          'antialiased w-screen container mx-auto p-4 relative'
        )}
      >
        <Particles
          particleCount={200}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={80}
          disableRotation={false}
          className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        />
        <Topbar />
        <main>{children}</main>
      </body>
      <Script
        src="https://umami.diogomartino.run/hyperion.js"
        data-website-id="7d672879-a147-4a34-905f-057fd60ca8ce"
        strategy="afterInteractive"
        defer
      />
    </html>
  );
}
