'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-background px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <div className="mb-4">
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Kapcsolatfelvétel
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Lépjen kapcsolatba 
                <span className="block text-primary">Krisztiánnal</span>
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Kérjük, töltse ki az alábbi űrlapot, hogy felvehessük Önnel a kapcsolatot, 
                vagy hívjon közvetlenül a megadott telefonszámon.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <a 
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">E-mail</h3>
                    <a 
                      href="mailto:info@budaikrisztian.hu" 
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      info@budaikrisztian.hu
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Szolgáltatási terület</h3>
                    <p className="text-muted-foreground">Budapest és Pest megye</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nyitvatartás</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Hétfő - Péntek: 8:00 - 18:00</p>
                      <p>Szombat: 8:00 - 16:00</p>
                      <p>Vasárnap: Zárva</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Teljes név *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adja meg a nevét"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    E-mail cím *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="pelda@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Telefonszám
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+36 30 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Üzenet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Írja le, miben segíthetünk..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Üzenet küldése
                </Button>

                <p className="text-xs text-muted-foreground">
                  A küldés gombra kattintva elfogadja az{' '}
                  <a href="/adatvedelem" className="underline">
                    adatvédelmi szabályzatunkat
                  </a>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}