'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FooterContactForm } from '@/components/sections/footer-contact-form';
import { Camera, Mail, CheckCircle, Smartphone, Wifi, Home } from 'lucide-react';
import { useEffect } from 'react';
import { serviceStructuredData } from '@/lib/seo/structured-data';

export default function OkosOtthonPage() {
  useEffect(() => {
    const structuredData = serviceStructuredData({
      name: 'Okos otthon megoldások és kamera rendszerek',
      description: 'Szakértői okos otthon megoldások, kamera rendszerek telepítése, automatizált világítás és klimatizálás, intelligens termosztátok.',
      url: 'https://budaikrisztian-villanyszerelo.hu/szolgaltatasok/okos-otthon-megoldasok-es-kamera-rendszerek-telepitese',
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
    'Okos otthon rendszerek tervezése és telepítése',
    'Kamera rendszerek kiépítése és konfigurálása',
    'Távoli monitorozás és értesítési rendszerek',
    'Automatizált világítás és klimatizálás',
    'Intelligens termosztátok és kapcsolók',
    'Mobilapplikációs vezérlés'
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
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  <span className="text-primary">Intelligens</span> Okos otthon rendszerek
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                <span className="text-primary">Modern</span> Okos otthon
                <span className="block text-slate-900">és kamera rendszerek</span>
              </h1>
              
              <p className="text-lg text-slate-700 md:text-xl">
                <strong className="text-primary">10+ év tapasztalat</strong> • <span className="text-primary font-semibold">Budapest</span> és környéke
              </p>

              <p className="text-base text-slate-600 md:text-lg">
                Segítek megvalósítani álmai <span className="text-primary font-semibold">okos otthonát</span> modern technológiával. 
                Bízza rám a <span className="text-primary font-medium">professzionális</span> kamerarendszerek telepítését és élvezze a biztonságot!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg" className="flex-1 sm:flex-initial" onClick={() => {
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Mail className="mr-2 h-5 w-5" />
                  Ingyenes árajánlat
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-initial" asChild>
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
                  alt="Okos otthon megoldások kamera rendszerek Budapest intelligens automatizálás termosztát"
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
              A jövő otthona ma
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Modern okos otthon megoldások és kamera rendszerek telepítése szakértő kezekkel
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-muted/30 p-6 shadow-sm">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Távvezérlés</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Vezérelje otthona minden eszközét mobilapplikációval, bárhonnan a világban
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <Wifi className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Okos hálózat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stabil WiFi hálózat és okos eszközök összehangolt működése
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Teljes integráció</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Világítás, fűtés, biztonság - minden egy helyen vezérelhető
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
            <Camera className="h-12 w-12" />
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Álmai okos otthona vár!
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Ne várjon tovább! Vegye fel velem a kapcsolatot még ma, és kezdjük el 
            közösen megtervezni az Ön számára tökéletes okos otthont.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" onClick={() => {
              document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ingyenes konzultáció
            </Button>
          </div>
        </div>
      </section>

      <FooterContactForm />
    </>
  );
}