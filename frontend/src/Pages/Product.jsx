import React, { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
function Product() {

  const product = [
    {
        "id": 1,
      "productName": "Laptop 1",
      "price": 2236,
      "rating": 4.7,
      "discount": 63,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "yes"
    },
    {
        "id": 2,
      "productName": "Laptop 2",
      "price": 2500,
      "rating": 4.5,
      "discount": 50,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "yes"
    },
    {
        "id": 3,
      "productName": "Laptop 3",
      "price": 1999,
      "rating": 4.3,
      "discount": 20,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "no"
    },
    {
        "id": 4,
      "productName": "Laptop 4",
      "price": 2799,
      "rating": 4.8,
      "discount": 10,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "yes"
    },
    {
        "id": 5,
      "productName": "Laptop 5",
      "price": 3000,
      "rating": 4.9,
      "discount": 5,
      "companyName": "ABC",
      "catagory": "Phone",
      "availability": "yes"
    }
  ];

  useEffect(() => {
    // fetchProduct()
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {product.map((e, index) => (
            <ProductCard key={index} element={e}/>
        ))}
      </div>
    </div>
  );
}

export default Product;
