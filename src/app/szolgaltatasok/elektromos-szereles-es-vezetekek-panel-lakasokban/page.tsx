import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Phone, Mail, CheckCircle, Shield, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Elektromos szerelés panel lakásokban | Budai Krisztián Villanyszerelő',
  description: 'Professzionális elektromos szerelés és vezetékezés panel lakásokban Budapesten. Biztonságos, megbízható munkavégzés tapasztalt villanyszerelővel.',
};

export default function ElektromosSzerelesPage() {
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
      <section className="flex h-[70vh] min-h-[500px] flex-col bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="relative flex-1">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop&crop=center"
              alt="Panel lakás elektromos szerelés"
              className="absolute inset-0 size-full object-cover opacity-30"
            />
          </div>
        </div>
        
        <div className="px-[5%]">
          <div className="relative z-10 container mx-auto max-w-7xl">
            <div className="grid grid-rows-1 items-start gap-y-8 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
              <div>
                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  Professzionális elektromos szerelés panel lakásokban
                </h1>
              </div>
              <div>
                <p className="mb-6 text-lg text-gray-200 md:text-xl">
                  Szakértői elektromos szerelési szolgáltatásokat kínálunk panel lakásokban, 
                  hogy otthona biztonságos és kényelmes legyen. Tapasztalt szakemberként 
                  gyorsan és hatékonyan oldom meg az elektromos problémákat.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/kapcsolat">
                      <Mail className="mr-2 h-4 w-4" />
                      Kapcsolat
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" asChild>
                    <Link href="tel:+36301234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Hívjon
                    </Link>
                  </Button>
                </div>
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
                <Button asChild>
                  <Link href="/kapcsolat">Kapcsolat</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="tel:+36301234567">
                    Hívjon most
                    <Phone className="ml-2 h-4 w-4" />
                  </Link>
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
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kapcsolat">
                Ingyenes árajánlat kérése
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="tel:+36301234567">
                <Phone className="mr-2 h-4 w-4" />
                +36 30 123 4567
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}