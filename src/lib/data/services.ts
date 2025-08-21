import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'elektromos-szereles-panel-lakasokban',
    title: 'Elektromos szerelés és vezetékek panel lakásokban',
    description: 'Szakszerű elektromos szerelés és vezetékezés panel lakásokban. Biztonságos és megbízható munkavégzés tapasztalt szakemberrel.',
    slug: 'elektromos-szereles-es-vezetekek-panel-lakasokban',
    icon: 'Zap',
    features: [
      'Panel lakások elektromos rendszereinek teljes felújítása',
      'Vezetékezés korszerűsítése és biztonságossá tétele',
      'Kapcsolók és konnektorok telepítése és cseréje',
      'Biztosítótáblák modernizálása és karbantartása'
    ],
    image: '/images/panel-wiring.jpg'
  },
  {
    id: 'halozati-felujitas-vezetekezes',
    title: 'Hálózati felújítás és vezetékezés régi és új ingatlanokban',
    description: 'A régi ingatlanok hálózati felújítása sok kihívással járhat. Szakszerű tervezéssel és kivitelezéssel garantáljuk a biztonságot és a hatékonyságot.',
    slug: 'halozati-felujitas-es-vezetekezes-regi-es-uj-ingatlanokban',
    icon: 'Home',
    features: [
      'Régi vezetékek teljes cseréje és korszerűsítése',
      'Új ingatlanok elektromos rendszerének tervezése',
      'Korszerű anyagok használata a hosszú élettartam érdekében',
      'Biztonsági előírások maradéktalan betartása'
    ],
    image: '/images/network-renovation.jpg'
  },
  {
    id: 'kisfeszultsegu-szolgaltatasok',
    title: 'Kisfeszültségű szolgáltatások',
    description: 'A kisfeszültségű szolgáltatások, mint a tűzjelzők és riasztók, elengedhetetlenek a biztonságos otthon megteremtéséhez.',
    slug: 'kisfeszultsegu-szolgaltatasok',
    icon: 'Shield',
    features: [
      'Tűzjelző rendszerek telepítése és karbantartása',
      'Riasztórendszerek kiépítése és beállítása',
      'Alacsony feszültségű rendszerek szakszerű kezelése',
      'Rendszeres karbantartás és ellenőrzés'
    ],
    image: '/images/low-voltage.jpg'
  },
  {
    id: 'okos-otthon-megoldasok',
    title: 'Okos otthon megoldások és kamera rendszerek telepítése',
    description: 'Az okos otthon megoldások nemcsak kényelmet, hanem biztonságot is nyújtanak. A modern kamera rendszerek segítenek megvédeni otthonát.',
    slug: 'okos-otthon-megoldasok-es-kamera-rendszerek-telepitese',
    icon: 'Camera',
    features: [
      'Okos otthon rendszerek tervezése és telepítése',
      'Kamera rendszerek kiépítése és konfigurálása',
      'Távoli monitorozás és értesítési rendszerek',
      'Automatizált világítás és klimatizálás'
    ],
    image: '/images/smart-home.jpg'
  }
];