import { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Kapcsolat | Budai Krisztián Villanyszerelő',
  description: 'Lépjen kapcsolatba Budai Krisztiánnal villanyszerelő szolgáltatásokkal kapcsolatos kérdésekkel. Ingyenes konzultáció és árajánlat.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Kapcsolatfelvétel
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Várjuk megkeresését villanyszerelő szolgáltatásokkal kapcsolatban. 
            Ingyenes konzultáció és árajánlat!
          </p>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
}