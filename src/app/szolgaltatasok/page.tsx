import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data/services';
import { FooterContactForm } from '@/components/sections/footer-contact-form';
import { Zap, Home, Shield, Camera, ArrowRight, Phone } from 'lucide-react';

const iconMap = {
  Zap,
  Home,
  Shield,
  Camera,
};

export const metadata: Metadata = {
  title: 'Szolgáltatások | Budai Krisztián Villanyszerelő',
  description: 'Teljes körű villanyszerelő szolgáltatások Budapesten és környékén. Elektromos szerelés, hálózati felújítás, okos otthon megoldások, kamera rendszerek.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Budai Krisztián
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Villanyszerelő Szolgáltatások
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Több mint 10 éves tapasztalattal nyújtok szakszerű elektromos megoldásokat 
              magánszemélyeknek és vállalkozásoknak Budapesten és Pest megyében.
            </p>
            <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row">
              <Button size="lg" asChild>
                <Link href="tel:+36301234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Hívjon most!
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/kapcsolat">
                  Ingyenes konzultáció
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <Card key={service.id} className="group h-full border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary group-hover:text-white">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary" asChild>
                      <Link href={`/szolgaltatasok/${service.slug}`}>
                        Részletek
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-[5%] py-16 text-white md:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Egyedi igényei vannak?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Vegye fel velem a kapcsolatot, és beszéljük meg személyesen, 
            hogyan segíthetek megoldani az Ön elektromos problémáit!
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

      <FooterContactForm />
    </>
  );
}