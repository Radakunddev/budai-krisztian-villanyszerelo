'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Clock, Shield, Star, ArrowRight } from 'lucide-react';

export function AboutSection() {
  const achievements = [
    {
      icon: Clock,
      title: '10+ év',
      description: 'Tapasztalat az elektromos szerelésben'
    },
    {
      icon: Award,
      title: '500+',
      description: 'Sikeresen befejezett projekt'
    },
    {
      icon: Shield,
      title: '100%',
      description: 'Elégedett ügyfelek'
    },
    {
      icon: Star,
      title: '2 év',
      description: 'Garancia minden munkára'
    }
  ];

  return (
    <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          
          {/* Content */}
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                Krisztián Budai
              </Badge>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                A <span className="text-primary">megbízható</span> választás a{' '}
                <span className="text-primary">profi villanyszereléshez</span>
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Több mint <span className="text-primary font-semibold">10 éves tapasztalattal</span> rendelkezem az elektromos rendszerek 
                területén. Munkám során mindig a <span className="text-primary font-medium">legmagasabb minőséget</span> és <span className="text-primary font-medium">megbízhatóságot</span> 
                tartom szem előtt, hogy ügyfeleink <span className="text-primary font-medium">100%-ban elégedettek</span> legyenek.
              </p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Szakmai képzettség:</strong> <span className="text-primary font-medium">Villanyszerelő mester</span>, folyamatos továbbképzések
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Szolgáltatási terület:</strong> <span className="text-primary font-medium">Budapest</span> és Pest megye
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Specialitások:</strong> <span className="text-primary font-medium">Panel lakások</span>, okos otthon rendszerek, kamera telepítés
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-2 w-fit rounded-lg bg-primary/10 p-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/rolunk">
                  Tudjon meg többet rólam
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => {
                document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Kérjen árajánlatot
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="/images/20250630_131407.jpg"
                alt="Budai Krisztián villanyszerelő munkában 10 év tapasztalat Budapest elektromos szerelés"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Megbízható partner</div>
                  <div className="text-xs text-muted-foreground">
                    Mindig időben, mindig pontosan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}