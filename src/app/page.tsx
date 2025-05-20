'use client';

import Head from 'next/head';
import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // seu código aqui
  }, []);

  return (
    <>
      <Head>
        <title>Minha Página</title>
      </Head>
      <div>Conteúdo da página</div>
    </>
  );
}
