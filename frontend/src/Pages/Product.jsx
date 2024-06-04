import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../component/ProductCard';
function Product() {

  const Product = [
    {
        "id": 1,
      "productName": "Laptop 1",
      "price": 2236,
      "rating": 4.7,
      "discount": 63,
      "companyName": "AMZ",
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

  const catagory = ["Phone","Computer","TV","Earphone","Tablet","Charger","Mouse"]
  const Companies = ["AMZ","FLP","SNP","MYN","AZO"]

  const handlclick = (e)=>{
      console.log(e)
      const filterData = Product.filter(ele=>{
          return (e === ele.catagory || e === ele.companyName)
      })

      setProduct(filterData)
  }

  const [product,setProduct] = useState([])

  const fetchData = ()=>{
      const response = await axios.get("/categories/:categoryname/products/:n/:minPrice/:maxPrice")
      setProduct(pre=>(response.data))
  }

  const handleSort = ()=>{
    const response = await axios.get("/categories/:categoryname/products/:n/:minPrice/:maxPrice")
    setProduct(pre=>(response.data))
  }

  useEffect(() => {
      fetchData()
  }, []);

  return (
    <div>
      <div className="flex w-full">
          <div className='w-[400px] flex justify-center rounded-sm shadow-lg'>
              <div className='bg-[#1111] w-[300px]'>
                  <div className='border-b-2 p-4'>
                      <h1 className="font-bold text-xl mb-5">Catagory</h1>
                      {catagory.map((e,i)=>{
                            return <div key={i} className='cursor-pointer h-[40px] flex justify-start shadow-sm'>
                              <p onClick={()=>handlclick(e)}>{e}</p>
                              </div>
                      })}
                      </div>

                      <div className='border-b-2 p-4'>
                        <h1 className="font-bold text-xl mb-5">Companies</h1>
                      {Companies.map((e,i)=>{
                          return <div key={i} className='cursor-pointer h-[50px] flex justify-start shadow-sm'>
                              <p onClick={()=>handlclick(e)}>{e}</p>
                              </div>
                      })}
                      </div>
                      <button onClick={handleSort}>Sort</button>
              </div>
              
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
        {product.map((e, index) => (
            <ProductCard key={index} element={e}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
