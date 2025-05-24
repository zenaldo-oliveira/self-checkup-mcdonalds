import { Restaurant } from '@prisma/client';
import { ChevronLeftIcon, ScrollTextIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>;
}

const RestaurantHeader = ({restaurant}: RestaurantHeaderProps) => {
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
      >
        <ChevronLeftIcon className="text-white" />
      </Button>

      {/* Botão cardápio */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30"
      >
        <ScrollTextIcon className="text-white" />
      </Button>

      {/* Imagem de fundo */}
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
        priority
      />

      {/* Nome do restaurante (opcional) */}
    </div>
  );
};

export default RestaurantHeader;
