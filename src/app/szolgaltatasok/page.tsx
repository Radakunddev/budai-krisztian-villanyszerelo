'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data/services';
import { FooterContactForm } from '@/components/sections/footer-contact-form';
import { Zap, Home, Shield, Camera, ArrowRight, Mail } from 'lucide-react';

const iconMap = {
  Zap,
  Home,
  Shield,
  Camera,
};

export default function ServicesPage() {
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
                  <span className="text-primary">Profi</span> Szolgáltatások
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                <span className="text-primary">Professzionális</span> Villanyszerelő
                <span className="block text-slate-900">Szolgáltatások</span>
              </h1>
              
              <p className="text-lg text-slate-700 md:text-xl">
                <strong className="text-primary">10+ év tapasztalat</strong> • <span className="text-primary font-semibold">Budapest</span> és környéke
              </p>

              <p className="text-base text-slate-600 md:text-lg">
                Több mint <span className="text-primary font-semibold">10 éves tapasztalattal</span> nyújtok <span className="text-primary font-medium">szakszerű</span> elektromos megoldásokat 
                magánszemélyeknek és vállalkozásoknak <span className="text-primary font-medium">Budapesten</span> és Pest megyében.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg" className="flex-1 sm:flex-initial" onClick={() => {
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Mail className="mr-2 h-5 w-5" />
                  Ingyenes árajánlat
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-initial" onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  Vissza a tetejére
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-md">
                <img
                  src="/images/20250630_131250ee.jpg"
                  alt="Budai Krisztián villanyszerelő szolgáltatások Budapest elektromos szerelés panel lakás"
                  className="h-full w-full rounded-2xl object-cover shadow-2xl"
                />
              </div>
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