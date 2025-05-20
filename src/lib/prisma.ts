// Importa o PrismaClient que é gerado automaticamente pelo Prisma
import { PrismaClient } from '@prisma/client';

// Declara uma variável global (somente em TypeScript) para armazenar a instância do Prisma
declare global {
  // Permite redeclarar a variável global `cachedPrisma` no escopo global (usada só fora de produção)
  // A diretiva abaixo impede o ESLint de reclamar sobre o uso de "var"
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

// Declara uma variável local chamada `prisma`
let prisma: PrismaClient;

// Se estiver em ambiente de produção, cria uma nova instância do Prisma normalmente
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Em desenvolvimento (dev), verifica se já existe uma instância salva globalmente
  if (!global.cachedPrisma) {
    // Se não existir, cria uma nova instância e salva na variável global
    global.cachedPrisma = new PrismaClient();
  }

  // Usa a instância salva na variável global
  prisma = global.cachedPrisma;
}

// Exporta a instância como `db` para ser usada em qualquer lugar do projeto
export const db = prisma;
