import { generatePageMetadata } from '@/lib/seo/metadata';
import { serviceStructuredData } from '@/lib/seo/structured-data';

export const metadata = generatePageMetadata(
  'Elektromos szerelés panel lakásokban - Budai Krisztián',
  'Szakértői elektromos szerelési szolgáltatások panel lakásokban Budapesten. Vezetékezés, kapcsolók, konnektorok, biztosítótáblák. 10+ év tapasztalat. Ingyenes árajánlat!',
  [
    'elektromos szerelés panel lakásban',
    'panel lakás villanyszerelő',
    'vezetékezés panel lakás',
    'biztosítótábla panel lakás',
    'villanyszerelő panel lakás Budapest'
  ],
  '/szolgaltatasok/elektromos-szereles-es-vezetekek-panel-lakasokban'
);

export const strukturaltAdatok = serviceStructuredData({
  name: 'Elektromos szerelés panel lakásokban',
  description: 'Szakértői elektromos szerelési szolgáltatások panel lakásokban, vezetékezés korszerűsítése, kapcsolók és konnektorok telepítése, biztosítótáblák modernizálása.',
  url: 'https://budaikrisztian-villanyszerelo.hu/szolgaltatasok/elektromos-szereles-es-vezetekek-panel-lakasokban',
  areaServed: ['Budapest', 'Pest megye']
});