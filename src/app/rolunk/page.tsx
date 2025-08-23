'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AboutSection } from '@/components/sections/about-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FooterContactForm } from '@/components/sections/footer-contact-form';
import { Phone, Mail, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
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
                  <span className="text-primary">Megbízható</span> Rólunk
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                <span className="text-primary">Budai Krisztián</span>
                <span className="block text-slate-900">Profi Villanyszerelő</span>
              </h1>
              
              <p className="text-lg text-slate-700 md:text-xl">
                <strong className="text-primary">10+ év tapasztalat</strong> • <span className="text-primary font-semibold">Budapest</span> és környéke
              </p>

              <p className="text-base text-slate-600 md:text-lg">
                Több mint <span className="text-primary font-semibold">10 éve</span> szolgálom ki ügyfeleimet <span className="text-primary font-medium">Budapesten</span> és környékén 
                <span className="text-primary font-medium">megbízható</span> villanyszerelő szolgáltatásokkal. Munkám során mindig a 
                <span className="text-primary font-medium">legmagasabb minőséget</span> és megbízhatóságot tartom szem előtt.
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
                  src="/images/avatarhoz (2).jpg"
                  alt="Budai Krisztián villanyszerelő portre Budapest szakértő 10 év tapasztalat"
                  className="h-full w-full rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <TestimonialsSection />
      <FooterContactForm />
    </>
  );
}