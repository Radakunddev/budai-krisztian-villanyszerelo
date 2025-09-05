import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function Ratings() {
  return (
    <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Vevőink mondták rólunk
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Büszkék vagyunk a kiváló értékeléseinkre. Tekintse meg, mit mondanak rólunk ügyfeleink.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <Image
                src="/images/google-logo.svg"
                alt="Google logo"
                width={80}
                height={30}
                className="mx-auto mb-4"
              />
              <CardTitle className="text-xl">Google</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">4.9</p>
              <p className="text-muted-foreground">48 vélemény</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Image
                src="/images/facebook-logo.svg"
                alt="Facebook logo"
                width={80}
                height={30}
                className="mx-auto mb-4"
              />
              <CardTitle className="text-xl">Facebook</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">4.8</p>
              <p className="text-muted-foreground">45 vélemény</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              {/* Placeholder for Jószaki logo */}
              <div className="mx-auto mb-4 h-[30px] w-[80px] bg-gray-300 rounded-md flex items-center justify-center">
                <p className="text-sm text-gray-500">Jószaki</p>
              </div>
              <CardTitle className="text-xl">Jószaki.hu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">18</p>
              <p className="text-muted-foreground">vélemény</p>
              <p className="text-sm text-muted-foreground mt-2">28 megbízás</p>
              <Link href="https://joszaki.hu/szakember/budai-krisztian" target="_blank" rel="noopener noreferrer" className="text-sm text-highlight underline mt-2">
                Profil megtekintése
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
