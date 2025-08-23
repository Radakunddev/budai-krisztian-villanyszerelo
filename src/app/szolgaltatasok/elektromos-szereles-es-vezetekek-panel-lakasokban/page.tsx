'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FooterContactForm } from '@/components/sections/footer-contact-form';
import { Zap, Mail, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { useEffect } from 'react';
import { serviceStructuredData } from '@/lib/seo/structured-data';

export default function ElektromosSzerelesPage() {
  useEffect(() => {
    const structuredData = serviceStructuredData({
      name: 'Elektromos szerelés panel lakásokban',
      description: 'Szakértői elektromos szerelési szolgáltatások panel lakásokban, vezetékezés korszerűsítése, kapcsolók és konnektorok telepítése, biztosítótáblák modernizálása.',
      url: 'https://budaikrisztian-villanyszerelo.hu/szolgaltatasok/elektromos-szereles-es-vezetekek-panel-lakasokban',
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
    'Panel lakások elektromos rendszereinek teljes felújítása',
    'Vezetékezés korszerűsítése és biztonságossá tétele',
    'Kapcsolók és konnektorok telepítése és cseréje',
    'Biztosítótáblák modernizálása és karbantartása',
    'Lakás elektromos rendszerének átfogó vizsgálata',
    'Vészhelyzeti javítások és hibaelhárítás'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Biztonság',
      description: 'Minden munkát a legmagasabb biztonsági előírások szerint végzünk'
    },
    {
      icon: Clock,
      title: 'Gyors kivitelezés',
      description: 'Hatékony munkavégzés, minimális kellemetlenséggel'
    },
    {
      icon: Award,
      title: '10+ év tapasztalat',
      description: 'Szakértelem panel lakások elektromos rendszereinek terén'
    }
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
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  <span className="text-primary">Profi</span> Panel lakások
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                <span className="text-primary">Profi</span> Elektromos szerelés
                <span className="block text-slate-900">panel lakásokban</span>
              </h1>
              
              <p className="text-lg text-slate-700 md:text-xl">
                <strong className="text-primary">10+ év tapasztalat</strong> • <span className="text-primary font-semibold">Budapest</span> és környéke
              </p>

              <p className="text-base text-slate-600 md:text-lg">
                <span className="text-primary font-semibold">Szakértői</span> elektromos szerelési szolgáltatásokat kínálunk panel lakásokban, 
                hogy otthona <span className="text-primary font-medium">biztonságos</span> és kényelmes legyen. <span className="text-primary font-medium">Tapasztalt szakemberként</span> 
                gyorsan és hatékonyan oldom meg az elektromos problémákat.
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
                  src="/images/20250630_131250ee.jpg"
                  alt="Panel lakás elektromos szerelés Budapest vezetékezés biztosítótábla modernizálás"
                  className="h-full w-full rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
            <div>
              <div className="mb-4">
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Villanyszerelő
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Budai Krisztián, a megbízható villanyszerelő
              </h2>
            </div>
            <div>
              <p className="mb-6 text-lg text-muted-foreground md:text-xl">
                Több mint 10 éve dolgozom villanyszerelőként Budapesten és környékén. 
                Szakértelmem különösen a panel lakások elektromos szerelésében kiemelkedő. 
                Minden munkát a legmagasabb minőségben és biztonsági előírások szerint végzek.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button onClick={() => {
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Ingyenes árajánlat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Elektromos szolgáltatások panel lakásokban
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Teljes körű elektromos szolgáltatások panel lakásokban, 
              modern technikákkal és megbízható anyagokkal.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-background p-6 shadow-sm">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
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
            Panel lakása elektromos felújításra szorul?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Ne várjon! Vegye fel velem a kapcsolatot még ma, és kérjen ingyenes árajánlatot 
            panel lakása elektromos rendszerének felújítására.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" onClick={() => {
              document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ingyenes árajánlat kérése
            </Button>
          </div>
        </div>
      </section>

      <FooterContactForm />
    </>
  );
}