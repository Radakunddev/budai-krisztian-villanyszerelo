import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://budaikrisztian-villanyszerelo.hu'),
  title: {
    template: '%s | Budai Krisztián Villanyszerelő',
    default: 'Budai Krisztián Villanyszerelő - Szakértő Elektromos Szerelés Budapest'
  },
  description: 'Professzionális villanyszerelő Budapest és Pest megyében. 10+ év tapasztalat elektromos szerelésben, hálózati felújításban, okos otthon rendszerekben. Ingyenes árajánlat!',
  keywords: [
    'villanyszerelő Budapest',
    'elektromos szerelés Budapest',
    'panel lakás villanyszerelő',
    'hálózati felújítás',
    'okos otthon Budapest',
    'kamera rendszer telepítés',
    'villanyszerelő Pest megye',
    'elektromos szerelés panel lakás',
    'biztosítótábla csere',
    'vezetékezés Budapest'
  ],
  authors: [{ name: 'Budai Krisztián' }],
  creator: 'Budai Krisztián Villanyszerelő',
  publisher: 'Budai Krisztián Villanyszerelő',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://budaikrisztian-villanyszerelo.hu',
    siteName: 'Budai Krisztián Villanyszerelő',
    title: 'Budai Krisztián Villanyszerelő - Szakértő Elektromos Szerelés Budapest',
    description: 'Professzionális villanyszerelő Budapest és Pest megyében. 10+ év tapasztalat elektromos szerelésben, hálózati felújításban, okos otthon rendszerekben.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Budai Krisztián Villanyszerelő - Budapest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budai Krisztián Villanyszerelő - Szakértő Elektromos Szerelés Budapest',
    description: 'Professzionális villanyszerelő Budapest és Pest megyében. 10+ év tapasztalat elektromos szerelésben.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://budaikrisztian-villanyszerelo.hu',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const generatePageMetadata = (
  title: string,
  description: string,
  keywords: string[] = [],
  path: string = ''
): Metadata => {
  const url = `https://budaikrisztian-villanyszerelo.hu${path}`;
  
  return {
    title,
    description,
    keywords: [...defaultMetadata.keywords!, ...keywords],
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
};