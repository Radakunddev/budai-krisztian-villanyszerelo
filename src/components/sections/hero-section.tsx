import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="flex h-[90vh] min-h-[600px] flex-col">
      {/* Background Image */}
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/40 z-10" />
          <img
            src="/images/budai-krisztian-hero.jpg"
            alt="Budai Krisztián villanyszerelő biztosítótáblánál dolgozik"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="px-[5%]">
        <div className="relative z-20 container mx-auto max-w-7xl">
          <div className="grid grid-rows-1 items-start gap-y-8 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            
            {/* Main Heading */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Villanyszerelő szakértő
                </span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl xl:text-7xl">
                Budai Krisztián
                <span className="block text-black">Villanyszerelő</span>
              </h1>
              
              <p className="mb-2 text-lg text-black md:text-xl">
                <strong>10+ év tapasztalat</strong> • Budapest és környéke
              </p>
            </div>

            {/* Services & CTA */}
            <div className="space-y-6">
              <p className="text-base text-black md:text-lg">
                Szakszerű elektromos szolgáltatások magánszemélyeknek és vállalkozásoknak. 
                Bízza ránk otthona vagy irodája elektromos rendszerének tervezését, 
                kivitelezését és karbantartását!
              </p>

              {/* Key Services */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg bg-white/80 p-3 backdrop-blur-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-black">Panel lakások felújítása</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/80 p-3 backdrop-blur-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-black">Hálózati modernizálás</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/80 p-3 backdrop-blur-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-black">Okos otthon rendszerek</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/80 p-3 backdrop-blur-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-black">Kamera rendszerek</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg" className="flex-1 sm:flex-initial" asChild>
                  <Link href="tel:+36301234567">
                    <Phone className="mr-2 h-5 w-5" />
                    Hívjon most!
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 sm:flex-initial" asChild>
                  <Link href="/kapcsolat">
                    <Mail className="mr-2 h-5 w-5" />
                    Kapcsolat
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}