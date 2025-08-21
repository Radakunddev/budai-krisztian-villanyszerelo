import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AboutSection } from '@/components/sections/about-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export const metadata: Metadata = {
  title: 'Rólunk | Budai Krisztián Villanyszerelő',
  description: 'Ismerjük meg Budai Krisztián villanyszerelőt, több mint 10 éves tapasztalatával és szakértelmével az elektromos rendszerek területén.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Rólunk
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Több mint 10 éve szolgálom ki ügyfeleimet Budapesten és környékén 
            megbízható villanyszerelő szolgáltatásokkal.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/kapcsolat">
                Kérjen árajánlatot
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}