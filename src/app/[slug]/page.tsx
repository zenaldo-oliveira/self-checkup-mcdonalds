import Image from 'next/image';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { db } from '@/lib/prisma';

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}
const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });

  if (!restaurant) {
    notFound(); // chama a função para mostrar página 404
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      {/* bem vindo */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja Bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos oferecer
          praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid-cels-2 grid pt-14"></div>
      <Card>
        <CardContent className="flex flex-col items-center gap-8 py-8">
          <Button variant="secondary" className="rounded-full">
            Para comer aqui
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantPage;
