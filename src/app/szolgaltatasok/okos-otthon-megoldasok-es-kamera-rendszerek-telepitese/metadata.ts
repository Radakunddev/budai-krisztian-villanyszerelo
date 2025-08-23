import { generatePageMetadata } from '@/lib/seo/metadata';
import { serviceStructuredData } from '@/lib/seo/structured-data';

export const metadata = generatePageMetadata(
  'Okos otthon megoldások és kamera rendszerek - Budai Krisztián',
  'Szakértői okos otthon megoldások és kamera rendszerek telepítése Budapesten. Automatizált világítás, intelligens termosztátok, mobilapplikációs vezérlés. 10+ év tapasztalat.',
  [
    'okos otthon rendszerek Budapest',
    'kamera rendszer telepítés',
    'intelligens otthon automatizálás',
    'okos világítás vezérlés',
    'távoli monitorozás rendszer'
  ],
  '/szolgaltatasok/okos-otthon-megoldasok-es-kamera-rendszerek-telepitese'
);

export const strukturaltAdatok = serviceStructuredData({
  name: 'Okos otthon megoldások és kamera rendszerek',
  description: 'Szakértői okos otthon megoldások, kamera rendszerek telepítése, automatizált világítás és klimatizálás, intelligens termosztátok.',
  url: 'https://budaikrisztian-villanyszerelo.hu/szolgaltatasok/okos-otthon-megoldasok-es-kamera-rendszerek-telepitese',
  areaServed: ['Budapest', 'Pest megye']
});