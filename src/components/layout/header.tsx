'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-[999] flex min-h-16 w-full items-center border-b border-border bg-background px-[5%] md:min-h-18">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-xl font-bold text-foreground">
            Budai Krisztián
            <span className="block text-sm font-normal text-muted-foreground">
              Villanyszerelő
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Főoldal
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">Szolgáltatások</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/szolgaltatasok/elektromos-szereles-es-vezetekek-panel-lakasokban"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Elektromos szerelés</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Panel lakások elektromos rendszereinek felújítása
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/szolgaltatasok/halozati-felujitas-es-vezetekezes-regi-es-uj-ingatlanokban"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Hálózati felújítás</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Régi és új ingatlanok vezetékezése
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/szolgaltatasok/kisfeszultsegu-szolgaltatasok"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Kisfeszültségű szolgáltatások</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Tűzjelzők, riasztók telepítése
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/szolgaltatasok/okos-otthon-megoldasok-es-kamera-rendszerek-telepitese"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Okos otthon megoldások</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Kamera rendszerek, automatizálás
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/rolunk" className="text-sm font-medium transition-colors hover:text-primary">
            Rólunk
          </Link>
          <Link href="/kapcsolat" className="text-sm font-medium transition-colors hover:text-primary">
            Kapcsolat
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href="/kapcsolat">
              <Mail className="mr-2 h-4 w-4" />
              Kapcsolat
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full w-full overflow-hidden border-b border-border bg-background lg:hidden">
          <div className="flex flex-col space-y-4 px-[5%] py-6">
            <Link 
              href="/" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Főoldal
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">Szolgáltatások</p>
              <div className="ml-4 space-y-2">
                <Link 
                  href="/szolgaltatasok/elektromos-szereles-es-vezetekek-panel-lakasokban"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Elektromos szerelés
                </Link>
                <Link 
                  href="/szolgaltatasok/halozati-felujitas-es-vezetekezes-regi-es-uj-ingatlanokban"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hálózati felújítás
                </Link>
                <Link 
                  href="/szolgaltatasok/kisfeszultsegu-szolgaltatasok"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kisfeszültségű szolgáltatások
                </Link>
                <Link 
                  href="/szolgaltatasok/okos-otthon-megoldasok-es-kamera-rendszerek-telepitese"
                  className="block text-sm transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Okos otthon megoldások
                </Link>
              </div>
            </div>
            <Link 
              href="/rolunk" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Rólunk
            </Link>
            <Link 
              href="/kapcsolat" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Kapcsolat
            </Link>
            
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="outline" asChild>
                <Link href="/kapcsolat" onClick={() => setIsMenuOpen(false)}>
                  <Mail className="mr-2 h-4 w-4" />
                  Kapcsolat
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}