import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data/services';
import { Zap, Home, Shield, Camera, ArrowRight } from 'lucide-react';

const iconMap = {
  Zap,
  Home,
  Shield,
  Camera,
};

export function ServicesSection() {
  return (
    <section className="bg-background px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Szolgáltatások
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Szakszerű elektromos megoldások
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Több mint 10 éves tapasztalattal rendelkezem az elektromos rendszerek 
            tervezésében, telepítésében és karbantartásában.
          </p>
        </div>

        {/* Services Grid */}
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

        {/* CTA Section */}
        <div className="mt-16 text-center md:mt-20">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Egyedi igényei vannak?
          </h3>
          <p className="mb-8 text-muted-foreground">
            Vegye fel velem a kapcsolatot, és beszéljük meg, hogyan segíthetek!
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/kapcsolat">
                Ingyenes konzultáció
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/szolgaltatasok">
                Összes szolgáltatás
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}