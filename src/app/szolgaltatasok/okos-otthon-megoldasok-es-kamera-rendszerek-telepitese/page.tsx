import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Phone, Mail, CheckCircle, Smartphone, Wifi, Home, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Okos otthon megoldások és kamera rendszerek | Budai Krisztián Villanyszerelő',
  description: 'Okos otthon megoldások és kamera rendszerek telepítése. Automatizált világítás, klimatizálás és biztonsági rendszerek.',
};

export default function OkosOtthonPage() {
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
      <section className="flex h-[70vh] min-h-[500px] flex-col bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="relative flex-1">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop&crop=center"
              alt="Okos otthon megoldások"
              className="absolute inset-0 size-full object-cover opacity-30"
            />
          </div>
        </div>
        
        <div className="px-[5%]">
          <div className="relative z-10 container mx-auto max-w-7xl">
            <div className="grid grid-rows-1 items-start gap-y-8 py-12 md:grid-cols-2 md:gap-x-12 md:py-18 lg:gap-x-20 lg:py-20">
              <div>
                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  Okos otthon megoldások és kamera rendszerek
                </h1>
              </div>
              <div>
                <p className="mb-6 text-lg text-gray-200 md:text-xl">
                  Krisztián Budai, tapasztalt villanyszerelő, segít megvalósítani álmai okos otthonát. 
                  Bízza rám a kamerarendszerek telepítését és élvezze a biztonságot!
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
              A jövő otthona ma
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Modern technológiával tesszük otthonát kényelmesebbé és biztonságosabbá
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg bg-muted/30 p-6">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Kamera rendszerek</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  HD kamerák telepítése beltéri és kültéri használatra
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-blue-100 p-3">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Mobilos vezérlés</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Távoli elérés és vezérlés okostelefonról
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-green-100 p-3">
                  <Wifi className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Hálózatosítás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  WiFi és vezetékes hálózatok kiépítése
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-fit rounded-lg bg-yellow-100 p-3">
                  <Home className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Automatizálás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Világítás, fűtés és szellőzés automatizálása
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:items-center">
            <div>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                Miért válassza az okos otthon megoldásokat?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Kényelem és biztonság</h4>
                    <p className="text-muted-foreground">Automatizált rendszerek, amelyek egyszerűsítik mindennapi életét és növelik otthona biztonságát.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Innovatív megoldások</h4>
                    <p className="text-muted-foreground">Kamera rendszerek, amelyek valós időben figyelik otthona biztonságát és védelmét.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center"
                alt="Okos otthon technológia"
                className="w-full rounded-lg object-cover"
              />
            </div>
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
            Készen áll az okos otthon élményére?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Fedezze fel az okos otthon megoldásokat és tegye életét kényelmesebbé! 
            Kamera rendszerekkel és automatizálással biztosítsa családja biztonságát.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kapcsolat">
                Okos otthon konzultáció
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