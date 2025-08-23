import { generatePageMetadata } from '@/lib/seo/metadata';
import { serviceStructuredData } from '@/lib/seo/structured-data';

export const metadata = generatePageMetadata(
  'Hálózati felújítás és vezetékezés - Budai Krisztián',
  'Szakértői hálózati felújítás régi és új ingatlanokban Budapesten. Vezetékezés, korszerűsítés, energiahatékonysági tanácsadás. 10+ év tapasztalat. Ingyenes árajánlat!',
  [
    'hálózati felújítás Budapest',
    'vezetékezés régi ingatlan',
    'elektromos hálózat korszerűsítés',
    'villanyszerelő hálózati felújítás',
    'ingatlan elektromos rendszer'
  ],
  '/szolgaltatasok/halozati-felujitas-es-vezetekezes-regi-es-uj-ingatlanokban'
);

export const strukturaltAdatok = serviceStructuredData({
  name: 'Hálózati felújítás és vezetékezés',
  description: 'Szakértői hálózati felújítás régi és új ingatlanokban, vezetékezés korszerűsítése, energiahatékonysági tanácsadás és tervezés.',
  url: 'https://budaikrisztian-villanyszerelo.hu/szolgaltatasok/halozati-felujitas-es-vezetekezes-regi-es-uj-ingatlanokban',
  areaServed: ['Budapest', 'Pest megye']
});