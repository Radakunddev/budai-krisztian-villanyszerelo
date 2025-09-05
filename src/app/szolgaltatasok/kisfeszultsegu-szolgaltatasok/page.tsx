'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FooterContactForm } from '@/components/sections/footer-contact-form';
import { Shield, Mail, CheckCircle, AlertTriangle, Bell, Eye } from 'lucide-react';
import { useEffect } from 'react';
import { serviceStructuredData } from '@/lib/seo/structured-data';

export default function KisfeszultseguSzolgaltatasokPage() {
  useEffect(() => {
    const structuredData = serviceStructuredData({
      name: 'Kisfeszültségű szolgáltatások',
      description: 'Szakértői kisfesxültségű szolgáltatások, tűzjelző rendszerek, riasztók, füstérzékelők telepítése és karbantartása.',
      url: 'https://budaikrisztian-villanyszerelo.hu/szolgaltatasok/kisfeszultsegu-szolgaltatasok',
      areaServed: ['Budapest', 'Pest megye']
    });

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    'Tűzjelző rendszerek telepítése és karbantartása',
    'Riasztórendszerek kiépítése és beállítása',
    'Alacsony feszültségű rendszerek szakszerű kezelése',
    'Rendszeres karbantartás és ellenőrzés',
    'Füstérzékelők és hőmérséklet érzékelők',
    '24/7 monitoring rendszerek'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:items-center lg:gap-20">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-8 w-8 text-highlight" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-highlight">
                  <span className="text-highlight">Biztonsági</span> Kisfeszültségű rendszerek
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                <span className="text-highlight">Profi</span> Kisfeszültségű
                <span className="block text-slate-900">szolgáltatások</span>
              </h1>
              
              <p className="text-lg text-slate-700 md:text-xl">
                <strong className="text-highlight">10+ év tapasztalat</strong> • <span className="text-highlight font-semibold">Budapest</span> és környéke
              </p>

              <p className="text-base text-slate-600 md:text-lg">
                A <span className="text-highlight font-semibold">kisfeszültségű szolgáltatások</span>, mint a tűzjelzők és riasztók, 
                <span className="text-highlight font-medium">elengedhetetlenek</span> a biztonságos otthon megteremtéséhez.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto" onClick={() => {
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Mail className="mr-2 h-5 w-5" />
                  Ingyenes árajánlat
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/szolgaltatasok">
                    Szolgáltatások
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-md">
                <img
                  src="/images/20250630_131250ee.jpg"
                  alt="Kisfeszültségű szolgáltatások Budapest tűzjelző riasztó rendszer füstérzékelő telepítés"
                  className="h-full w-full rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Biztonság mindenekelőtt
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Modern kisfeszültségű rendszerekkel védjük otthonát és családját
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-muted/30 p-6">
                <CheckCircle className="mt-1 h-5 w-5 text-highlight flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-red-100 p-3">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Tűzjelzők</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Füst- és hőérzékelők telepítése és karbantartása
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-blue-100 p-3">
                  <Bell className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Riasztók</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Behatolásjelző és vagyonvédelmi rendszerek
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-green-100 p-3">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  24/7 felügyeleti és értesítési rendszerek
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <Shield className="h-8 w-8 text-highlight" />
                </div>
                <CardTitle>Karbantartás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Rendszeres ellenőrzés és szakszerű karbantartás
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-[5%] py-16 text-white md:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 mx-auto w-fit rounded-lg bg-white/10 p-3">
            <Shield className="h-12 w-12" />
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Gondoskodik családja biztonságáról?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Ne hagyja a véletlenre! Modern tűzjelző és riasztórendszerekkel 
            biztosítsa otthona és szerettei védelmét.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" onClick={() => {
              document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Biztonsági felmérés kérése
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Gyakran Ismételt Kérdések
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Válaszok a kisfeszültségű rendszerekkel kapcsolatos leggyakoribb kérdésekre.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Mit jelentenek a kisfeszültségű szolgáltatások?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A kisfeszültségű rendszerek az erősáramú hálózatoktól elkülönülő, alacsonyabb feszültségen működő rendszerek. Ide tartoznak például a kaputelefonok, a riasztórendszerek, a kamera rendszerek, a számítógépes hálózatok (Ethernet) és a különböző okos otthon eszközök.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Miért érdemes szakemberre bízni a kisfeszültségű rendszerek telepítését?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Bár ezek a rendszerek alacsony feszültségen működnek, a szakszerűtlen telepítés működési problémákhoz, a drága eszközök meghibásodásához és akár biztonsági résekhez is vezethet (pl. egy rosszul beállított riasztó- vagy kamerarendszer).</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Milyen típusú kaputelefonokat telepít?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Vállalom a hagyományos, analóg kaputelefonok, valamint a modern, videós és IP-alapú okos kaputelefonok telepítését, javítását és karbantartását is, társasházak és családi házak számára egyaránt.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>A meglévő riasztórendszeremet tudja bővíteni vagy modernizálni?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Igen, a legtöbb esetben a meglévő riasztórendszerek bővíthetők új érzékelőkkel, vagy modernizálhatók okos funkciókkal, például mobiltelefonos értesítéssel és távoli vezérléssel.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FooterContactForm />
    </>
  );
}