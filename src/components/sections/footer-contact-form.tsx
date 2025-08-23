'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

export function FooterContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://hook.eu2.make.com/jb9mo01hixohy8hstz159j6wu9voebb6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hiba történt az üzenet küldésekor. Kérjük, próbálja újra később.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="bg-white px-[5%] py-16 md:py-20">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Ingyenes árajánlat kérése
          </h2>
          <p className="text-lg text-slate-600">
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
                className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefonszám"
                className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
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
              className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="flex w-full rounded-md border bg-white border-slate-200 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              placeholder="Írja le, miben segíthetünk... *"
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
            <Send className="mr-2 h-4 w-4" />
            Árajánlat kérése
          </Button>

          <p className="text-xs text-slate-500 text-center">
            A küldés gombra kattintva elfogadja az adatvédelmi szabályzatunkat.
          </p>
        </form>
      </div>
    </section>
  );
}