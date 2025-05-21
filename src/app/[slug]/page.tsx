import Image from 'next/image';
import { notFound } from 'next/navigation';

import { db } from '@/lib/prisma';

import ConsumptionMethodOption from './components/consumption-method-option';

interface RestaurantPageProps {
  params: { slug: string };
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });

  if (!restaurant) {
    notFound(); // mostra página 404
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TÍTULO */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>

      {/* Bem-vindo */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja Bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos oferecendo
          praticidade e sabor em cada detalhe!
        </p>
      </div>

      {/* Opções */}
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          buttonText="Para comer aqui"
          imageAlt="Comer aqui"
          imageUrl="/dine_in.png"
        />
        <ConsumptionMethodOption
          buttonText="Para levar"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
