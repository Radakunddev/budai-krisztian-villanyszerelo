'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FooterContactForm } from '@/components/sections/footer-contact-form';
import { Home, Mail, CheckCircle, Wrench, Building, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { serviceStructuredData } from '@/lib/seo/structured-data';

export default function HalozatiFelujitasPage() {
  useEffect(() => {
    const structuredData = serviceStructuredData({
      name: 'Hálózati felújítás és vezetékezés',
      description: 'Szakértői hálózati felújítás régi és új ingatlanokban, vezetékezés korszerűsítése, energiahatékonysági tanácsadás és tervezés.',
      url: 'https://budaikrisztian-villanyszerelo.hu/szolgaltatasok/halozati-felujitas-es-vezetekezes-regi-es-uj-ingatlanokban',
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
    'Régi vezetékek teljes cseréje és korszerűsítése',
    'Új ingatlanok elektromos rendszerének tervezése',
    'Korszerű anyagok használata a hosszú élettartam érdekében',
    'Biztonsági előírások maradéktalan betartása',
    'Hálózati terhelés optimalizálása',
    'Energiahatékonysági tanácsadás'
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
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  <span className="text-primary">Szakszerű</span> Hálózati felújítás
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                <span className="text-primary">Professzionális</span> Hálózati felújítás
                <span className="block text-slate-900">és vezetékezés</span>
              </h1>
              
              <p className="text-lg text-slate-700 md:text-xl">
                <strong className="text-primary">10+ év tapasztalat</strong> • <span className="text-primary font-semibold">Budapest</span> és környéke
              </p>

              <p className="text-base text-slate-600 md:text-lg">
                A régi ingatlanok hálózati felújítása sok kihívással járhat. 
                <span className="text-primary font-semibold">Szakszerű</span> tervezéssel és kivitelezéssel <span className="text-primary font-medium">garantálom</span> a biztonságot és a hatékonyságot.
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
                  src="/images/20250630_131407.jpg"
                  alt="Hálózati felújítás és vezetékezés Budapest régi új ingatlan elektromos korszerűsítés"
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
              Teljes körű hálózati szolgáltatások
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-muted/30 p-6">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Régi ingatlanok</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Régi ingatlanok elektromos rendszerének teljes korszerűsítése
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Új építésű ingatlanok</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Új ingatlanok elektromos rendszerének tervezése és kivitelezése
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Karbantartás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Rendszeres ellenőrzés és preventív karbantartás
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
            <Zap className="h-12 w-12" />
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Ingatlana hálózati felújításra szorul?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Szakszerű tervezéssel és modern anyagokkal garantálom a biztonságos és hatékony megoldást.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" onClick={() => {
              document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ingyenes helyszíni felmérés
            </Button>
          </div>
        </div>
      </section>

      <FooterContactForm />
    </>
  );
}