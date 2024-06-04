import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <NavLink to={`/product/${props.element.id}`}>
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img className="w-full h-48 object-cover" src={props.element.image} alt={props.element.productName} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{props.element.productName}</h3>
        <p className="text-md font-bold text-gray-900 mb-2">{props.element.companyName}</p>
        <p className="text-md font-bold text-gray-900 mb-2">{props.element.catagory}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-900 font-bold text-lg">${props.element.price}</span>
          <span className="text-gray-900 font-bold">{props.element.rating}/5</span>
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default ProductCard;
