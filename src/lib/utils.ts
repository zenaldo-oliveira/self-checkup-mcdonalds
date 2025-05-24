// utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 👇 Adicione aqui a função que faltava
export function isConsumptionMethodValid(method: string): boolean {
  const validMethods = ['dine-in', 'takeaway', 'drive-thru', 'delivery'];
  return validMethods.includes(method);
}

