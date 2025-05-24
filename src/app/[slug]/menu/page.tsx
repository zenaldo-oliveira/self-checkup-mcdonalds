

import { notFound } from 'next/navigation';

import { db } from '@/lib/prisma';

interface RestaurantMenuPageProps {
  params: { slug: string };
  searchParams: { consumptionMethod?: string };
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ['DINE_IN', 'TAKEAWAY'].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = params;
  const { consumptionMethod } = searchParams;

  if (consumptionMethod && !isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  const restaurant = await db.restaurant.findUnique({ where: { slug } });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>

    </div>
  );
};

export default RestaurantMenuPage;
