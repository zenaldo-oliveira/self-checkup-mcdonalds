'use client';

import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log('Página do MEC carregada TESTE');
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-yellow-100 to-red-100 p-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-red-600">
          ATESTE ABACATINHOOO
        </h1>
        <p className="text-lg text-gray-700">
          Bem-vindo à página do Ministério da Educação.
        </p>
      </div>
    </div>
  );
}
