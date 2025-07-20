"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product{
  _id:string
  image:string
  name:string
  description:string
  price:number
}

const ProductList = () => {
  const [allProducts,setAllProducts] = useState([])
  useEffect(() => {
    const fetchProdcts = async () => {
      const res = await axios.get("/api/fetch-products");
      console.log("data: ", res.data);
      setAllProducts(res.data.products)
    };
    fetchProdcts()
  }, []);

  return (
    <div
      id="product"
      className="px-4 py-12 md:px-12 flex flex-col justify-center items-center"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
        {allProducts.map(({image,name,description,price,_id}:Product, idx) => (
          <Link key={idx} href={`/product/${_id}`} className=" p-4 bg-neutral-200 rounded-xl shadow-2xl shadow-neutral-800/30">
            <Image
              src={image}
              alt="product img"
              width={500}
              height={500}
              className="w-full h-72 object-center object-cover rounded-xl"
            />
            <div>
              <h2 className="text-lg font-semibold pt-3">{name}</h2>
              <p className="text-md text-neutral-600 text-ellipsis overflow-hidden whitespace-nowrap">{description}</p>
              <p className="text-md pt-3 font-semibold text-green-800">{price} Rs</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
