import { generatePageMetadata } from '@/lib/seo/metadata';
import { serviceStructuredData } from '@/lib/seo/structured-data';

export const metadata = generatePageMetadata(
  'Kisfeszültségű szolgáltatások - Budai Krisztián',
  'Szakértői kisfeszültségű szolgáltatások Budapesten. Tűzjelző rendszerek, riasztók, füstérzékelők telepítése és karbantartása. 10+ év tapasztalat. Ingyenes árajánlat!',
  [
    'kisfeszültségű szolgáltatások Budapest',
    'tűzjelző rendszer telepítés',
    'riasztórendszer kiépítés',
    'füstérzékelő telepítés',
    'biztonságtechnikai rendszerek'
  ],
  '/szolgaltatasok/kisfeszultsegu-szolgaltatasok'
);

export const strukturaltAdatok = serviceStructuredData({
  name: 'Kisfeszültségű szolgáltatások',
  description: 'Szakértői kisfeszültségű szolgáltatások, tűzjelző rendszerek, riasztók, füstérzékelők telepítése és karbantartása.',
  url: 'https://budaikrisztian-villanyszerelo.hu/szolgaltatasok/kisfeszultsegu-szolgaltatasok',
  areaServed: ['Budapest', 'Pest megye']
});