"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const products = {
  men: [
    {
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      description: "Men’s Short-Sleeve Running Top",
      price: "54.99",
      image: "/img/men1.png",
    },
    {
      name: "Nike Dri-FIT Challenger",
      description: "Men’s 18cm (approx.) 2-In-1 Versatile Shorts",
      price: "33.99",
      image: "/img/men2.png",
    },
    {
      name: "Nike Sportswear Trend",
      description: "Older Kids' (Girls') High-waisted Woven Shorts",
      price: "49.99",
      image: "/img/men3.png",
    },
    {
      name: "Nike Dri-FIT Ready",
      description: "Men's Short-Sleeve Fitness Top",
      price: "25.99",
      image: "/img/men4.png",
    },
  ],
  women: [
    {
      name: "Nike Dri-FIT ADV Run Division",
      description: "Women’s Long-Sleeve Running Top",
      price: "69.99",
      image: "/img/women1.png",
    },
    {
      name: "Nike Fast",
      description: "Women’s Mid-Rise 7/8 Running Leggings with Pockets",
      price: " 49.99",
      image: "/img/women2.png",
    },
    {
      name: "Nike One Leak Protection: Period",
      description: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
      price: "38.85",
      image: "/img/women3.png",
    },
    {
      name: "Nike Alate All U",
      description: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
      price: "25.12",
      image: "/img/women4.png",
    },
  ],
};

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="w-[280px] max-h-[380px] bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-black">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-[200px] object-cover rounded-md"
      />
      <h3 className="mt-3 text-md font-bold text-center">{product.name}</h3>
      <p className="text-gray-500 text-sm text-center">{product.description}</p>
      <span className="mt-2 text-lg font-semibold">${product.price}</span>
    </div>
  );
};



const GearUp = () => {
  const [menIndex, setMenIndex] = useState(0);
  const [womenIndex, setWomenIndex] = useState(0);

  const handleMenNext = () => {
    if (menIndex < products.men.length - 2) {
      setMenIndex(menIndex + 2);
    }
  };

  const handleWomenNext = () => {
    if (womenIndex < products.women.length - 2) {
      setWomenIndex(womenIndex + 2);
    }
  };

  return (
    <div className="bg-white w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-[24px] font-bold text-black text-left helvetica-neue mb-8">Gear Up</h2>

        
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-[1600px]">
            
            
            <div className="w-full max-w-[800px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-black helvetica-neue">Shop Men’s</h3>
                <div className="flex space-x-3">
                  <button onClick={() => setMenIndex(Math.max(menIndex - 2, 0))}
                    className="w-12 h-12 flex items-center justify-center border rounded-full bg-white hover:bg-gray-100">
                    <ChevronLeft size={24} color="black" />
                  </button>
                  <button onClick={handleMenNext}
                    className="w-12 h-12 flex items-center justify-center border rounded-full bg-white hover:bg-gray-100">
                    <ChevronRight size={24} color="black" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
                {products.men.slice(menIndex, menIndex + 2).map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>

         
            <div className="w-full max-w-[800px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-black helvetica-neue">Shop Women’s</h3>
                <div className="flex space-x-3">
                  <button onClick={() => setWomenIndex(Math.max(womenIndex - 2, 0))}
                    className="w-12 h-12 flex items-center justify-center border rounded-full bg-white hover:bg-gray-100">
                    <ChevronLeft size={24} color="black" />
                  </button>
                  <button onClick={handleWomenNext}
                    className="w-12 h-12 flex items-center justify-center border rounded-full bg-white hover:bg-gray-100">
                    <ChevronRight size={24} color="black" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
                {products.women.slice(womenIndex, womenIndex + 2).map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};




export default GearUp;
