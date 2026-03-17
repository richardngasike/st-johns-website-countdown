import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "St. John's Training College Samburu | Coming Soon",
  description: "St. John's Training College Samburu County, Kenya. A premier training institution offering quality education, professional certificates and diploma programs in Samburu. Website launching soon.",
  keywords: [
    "St Johns Training College",
    "St. John's Training College Samburu",
    "St Johns College Samburu Kenya",
    "training college Samburu",
    "college Samburu County",
    "Samburu college Kenya",
    "training institution Samburu",
    "education Samburu",
    "certificate courses Samburu",
    "diploma programs Samburu Kenya",
    "vocational training Samburu",
    "northern Kenya college",
    "Samburu County education",
    "stjohns samburu",
  ].join(', '),
  authors: [{ name: "St. John's Training College" }],
  creator: "St. John's Training College",
  publisher: "St. John's Training College",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://stjohnscollege.ac.ke',
    siteName: "St. John's Training College Samburu",
    title: "St. John's Training College Samburu | Coming Soon",
    description: "Premier training college in Samburu County, Kenya. Offering quality education and certified programs. Launching soon.",
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 500,
        alt: "St. John's Training College Samburu",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "St. John's Training College Samburu | Coming Soon",
    description: "Premier training college in Samburu County, Kenya. Website coming soon.",
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://stjohnscollege.ac.ke',
  },
  other: {
    'geo.region': 'KE-30',
    'geo.placename': 'Samburu, Kenya',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#0a3d1f" />
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Samburu, Kenya" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "St. John's Training College",
              "alternateName": ["St Johns Training College", "St Johns College Samburu"],
              "url": "https://stjohnscollege.ac.ke",
              "logo": "https://stjohnscollege.ac.ke/logo.png",
              "description": "St. John's Training College is a premier training institution in Samburu County, Kenya offering quality certificate and diploma programs.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Samburu",
                "addressRegion": "Samburu County",
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@stjohnscollege.ac.ke",
                "contactType": "Admissions"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
