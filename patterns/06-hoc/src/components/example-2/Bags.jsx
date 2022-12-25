import React from 'react';
import withHOC from './WithHOC';

const Bags = ({ data }) => {
  return (
    <div className="container-cards">
      {data?.map((product) => (
        <div key={product.code} className="card">
          <img src={product.picture_1} alt={product.name} className="card__img" />
          <div className="card__content">
            <h3 className="card__title">
              {product.brand} - {product.name}
            </h3>
            <p className="card__price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withHOC(Bags, 'sub_category=Sunglasses');
