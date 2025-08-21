'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Send, MapPin, Clock } from 'lucide-react';

export function FooterContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-slate-900 px-[5%] py-16 text-white md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ingyenes árajánlat kérése
              </h2>
              <p className="text-lg text-gray-300">
                Töltse ki az alábbi űrlapot, és 24 órán belül felvesszük Önnel a kapcsolatot!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Teljes név *"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefonszám"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail cím *"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="flex w-full rounded-md border bg-white/10 border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  placeholder="Írja le, miben segíthetünk... *"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" />
                Árajánlat kérése
              </Button>

              <p className="text-xs text-gray-400">
                A küldés gombra kattintva elfogadja az adatvédelmi szabályzatunkat.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="mb-6 text-2xl font-bold">Kapcsolat</h3>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-primary/20 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Telefon</h4>
                    <a 
                      href="tel:+36301234567" 
                      className="text-gray-300 transition-colors hover:text-primary"
                    >
                      +36 30 123 4567
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-primary/20 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">E-mail</h4>
                    <a 
                      href="mailto:info@budaikrisztian.hu" 
                      className="text-gray-300 transition-colors hover:text-primary"
                    >
                      info@budaikrisztian.hu
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-primary/20 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Szolgáltatási terület</h4>
                    <p className="text-gray-300">Budapest és Pest megye</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-primary/20 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Nyitvatartás</h4>
                    <div className="space-y-1 text-sm text-gray-300">
                      <p>Hétfő - Péntek: 8:00 - 18:00</p>
                      <p>Szombat: 8:00 - 16:00</p>
                      <p>Vasárnap: Zárva</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick CTA */}
            <div className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
              <h4 className="mb-2 font-semibold">Sürgős probléma?</h4>
              <p className="mb-4 text-sm text-gray-300">Hívjon azonnal!</p>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="tel:+36301234567">
                  <Phone className="mr-2 h-4 w-4" />
                  +36 30 123 4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}