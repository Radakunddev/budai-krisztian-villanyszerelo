import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
          {/* Logo */}
          <Link href="/" className="mb-8 flex items-center">
            <div className="text-xl font-bold text-foreground">
              Budai Krisztián
              <span className="block text-sm font-normal text-muted-foreground">
                Villanyszerelő
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <Link href="/kapcsolat" className="transition-colors hover:text-primary">
                Kapcsolat Felvétel
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/szolgaltatasok" className="transition-colors hover:text-primary">
                Szolgáltatások
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/rolunk" className="transition-colors hover:text-primary">
                Rólunk
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/velemények" className="transition-colors hover:text-primary">
                Vélemények
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/gyik" className="transition-colors hover:text-primary">
                Gyakori Kérdések
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border"></div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse items-center justify-between pt-6 pb-4 text-center text-sm md:flex-row md:pt-8 md:pb-0">
          <p className="mt-8 text-muted-foreground md:mt-0">
            © {currentYear} Budai Krisztián Villanyszerelő. Minden jog fenntartva.
          </p>
          
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline decoration-border underline-offset-1">
              <Link href="/adatvedelem" className="transition-colors hover:text-primary">
                Adatvédelmi Szabályzat
              </Link>
            </li>
            <li className="underline decoration-border underline-offset-1">
              <Link href="/felhasznalasi-feltetelek" className="transition-colors hover:text-primary">
                Felhasználási Feltételek
              </Link>
            </li>
            <li className="underline decoration-border underline-offset-1">
              <Link href="/sutik" className="transition-colors hover:text-primary">
                Sütik Beállításai
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            <div>
              <h4 className="mb-2 font-semibold">Kapcsolat</h4>
              <p className="text-sm text-muted-foreground">
                <Link href="tel:+36301234567" className="transition-colors hover:text-primary">
                  +36 30 123 4567
                </Link>
              </p>
              <p className="text-sm text-muted-foreground">
                <Link href="mailto:info@budaikrisztian.hu" className="transition-colors hover:text-primary">
                  info@budaikrisztian.hu
                </Link>
              </p>
            </div>
            
            <div>
              <h4 className="mb-2 font-semibold">Szolgáltatási terület</h4>
              <p className="text-sm text-muted-foreground">Budapest és környéke</p>
              <p className="text-sm text-muted-foreground">Pest megye</p>
            </div>
            
            <div>
              <h4 className="mb-2 font-semibold">Nyitvatartás</h4>
              <p className="text-sm text-muted-foreground">Hétfő - Péntek: 8:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">Szombat: 8:00 - 16:00</p>
              <p className="text-sm text-muted-foreground">Vasárnap: Zárva</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}