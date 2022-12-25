import React, { Suspense } from 'react';

const page = async () => {
  const response = await fetch(
    'https://api-shoes.vercel.app/api/products?limit=2',
    { next: { revalidate: 60 } }
  );

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div>page</div>
    </Suspense>
  );
};

export default page;

export async function generateStaticParams() {
  const response = await fetch(
    'https://api-shoes.vercel.app/api/products?limit=2'
  );

  const data = await response.json();
  const products = data.data;

  return products.map((product: any) => ({
    id: product._id,
  }));
}
