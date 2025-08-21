import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Phone, Mail, CheckCircle, Wrench, Building, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hálózati felújítás és vezetékezés | Budai Krisztián Villanyszerelő',
  description: 'Hálózati felújítás és vezetékezés régi és új ingatlanokban. Szakszerű tervezés, kivitelezés és modernizálás.',
};

export default function HalozatiFelujitasPage() {
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
      <section className="flex h-[70vh] min-h-[500px] flex-col bg-gradient-to-br from-green-900 to-blue-900">
        <div className="relative flex-1">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center"
              alt="Hálózati felújítás és vezetékezés"
              className="absolute inset-0 size-full object-cover opacity-30"
            />
          </div>
        </div>
        
        <div className="px-[5%]">
          <div className="relative z-10 container mx-auto max-w-7xl">
            <div className="grid grid-rows-1 items-start gap-y-8 py-12 md:grid-cols-2 md:gap-x-12 md:py-18 lg:gap-x-20 lg:py-20">
              <div>
                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  Hálózati felújítás és vezetékezés
                </h1>
              </div>
              <div>
                <p className="mb-6 text-lg text-gray-200 md:text-xl">
                  A régi ingatlanok hálózati felújítása sok kihívással járhat. 
                  Szakszerű tervezéssel és kivitelezéssel garantálom a biztonságot és a hatékonyságot.
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
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kapcsolat">
                Ingyenes helyszíni felmérés
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