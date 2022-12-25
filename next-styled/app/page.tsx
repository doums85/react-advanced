import React from 'react';
// https://api-shoes.vercel.app/api/products
const page = async () => {
  const response = await fetch(
    'https://api-shoes.vercel.app/api/products?limit=2'
  );

  const data = await response.json();
  const products = data.data;
console.log('====================================');
console.log(products);
console.log('====================================');
  return (
    <h1 className="text-3xl mt-5 font-bold underline">
     
    </h1>
  );
};

export default page;
