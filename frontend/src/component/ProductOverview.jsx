import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductOverview = (props) => {

  // const [product,setProduct] = useState()

  let Product = [
    {
        "id": 1,
      "productName": "Laptop 1",
      "price": 2236,
      "rating": 4.7,
      "discount": 63,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "yes",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
    },
    {
        "id": 2,
      "productName": "Laptop 2",
      "price": 2500,
      "rating": 4.5,
      "discount": 50,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "yes",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
    },
    {
        "id": 3,
      "productName": "Laptop 3",
      "price": 1999,
      "rating": 4.3,
      "discount": 20,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "no",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
    },
    {
        "id": 4,
      "productName": "Laptop 4",
      "price": 2799,
      "rating": 4.8,
      "discount": 10,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "yes",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
    },
    {
        "id": 5,
      "productName": "Laptop 5",
      "price": 3000,
      "rating": 4.9,
      "discount": 5,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "yes",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
    }
  ];

  Product = Product.filter(e=>{
    console.log(props.id)
    return(e.id == parseInt(props.id))
  })

  const product = Product[0]

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="w-full h-64 object-cover md:w-64"
              src={product.image}
              alt={product.productName}
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900">{product.productName}</h2>
            <p className="mt-2 text-gray-600">Price: ${product.price}</p>
            <p className="mt-2 text-gray-600">Rating: {product.rating} / 5</p>
            <p className="mt-2 text-gray-600">Discount: {product.discount}%</p>
            <p className="mt-2 text-gray-600">Availability: {product.availability}</p>
            <p className="mt-2 text-gray-600">{product.companyName}</p>
            <p className="mt-2 text-gray-600">{product.catagory}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
