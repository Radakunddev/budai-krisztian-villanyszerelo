'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isServicePage = pathname.startsWith('/szolgaltatasok');

  return (
    <>
      {!isServicePage && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
