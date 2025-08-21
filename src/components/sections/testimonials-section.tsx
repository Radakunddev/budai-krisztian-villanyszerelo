import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data/testimonials';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="bg-background px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Ügyfélvélemények
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Mit mondanak rólam az ügyfeleim
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Az elégedett ügyfelek véleménye a legjobb bizonyíték a munkám minőségére.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="flex h-full flex-col justify-between p-6 md:p-8">
                
                {/* Rating */}
                <div className="mb-5 md:mb-6">
                  <div className="mb-5 flex md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg italic leading-relaxed md:text-xl">
                    "{testimonial.content}"
                  </blockquote>
                </div>

                {/* Author */}
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <img
                      src={testimonial.image || `https://images.unsplash.com/photo-${1500000000000 + parseInt(testimonial.id)}?w=100&h=100&fit=crop&crop=face`}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company && testimonial.location
                        ? `${testimonial.company}, ${testimonial.location}`
                        : testimonial.company || testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center md:mt-20">
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-3 text-3xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Elégedett ügyfél</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 text-3xl font-bold text-primary">4.9/5</div>
              <p className="text-sm text-muted-foreground">Átlagos értékelés</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Ajánlási arány</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}