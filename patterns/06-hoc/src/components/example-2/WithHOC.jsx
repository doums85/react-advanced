/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

const withHOC = (Component, endPoint) => (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api-ecommerce-v1.vercel.app/api/products?${endPoint}`)
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data.data.splice(0, 10));
      });
  }, []);

  const title = endPoint.split('=').at(-1);

  return (
    <div className="section bd-container ">
      <h1 className='section__title section__title-center'>{title}</h1>

      <Component data={data} {...{ props }} />
    </div>
  );
};

export default withHOC;
