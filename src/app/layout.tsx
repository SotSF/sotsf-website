import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import UnderlineLink from '@/components/links/UnderlineLink';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/gate.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/gate.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}

        <footer className='absolute bottom-2 w-full flex items-center justify-center text-center'>
          {/* © {new Date().getFullYear()} By
          <UnderlineLink className='ml-1' href='https://se.cretfi.re'>
            Servants of the Secret Fire
          </UnderlineLink> */}
        </footer>
      </body>
    </html>
  );
}
