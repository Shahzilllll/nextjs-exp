"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import p1 from "/img/p1.png";
import p2 from "/img/p2.png";
import p3 from "/img/p3.png";
import p4 from "/img/p4.png";
import p5 from "/img/p5.png";
import p6 from "/img/p6.png";
import p7 from "/img/p7.png";
import p8 from "/img/p8.png";


const products = [
  {
    id: 1,
    imgSrc: p1,
    name: "Nike Air Max Pulse",
    description: "Women's Shoes",
    price: "$ 149.40",
  },
  {
    id: 2,
    imgSrc: p2,
    name: "Nike Air Max Pulse",
    description: "Men's Shoes",
    price: "$ 160.90",
  },
  {
    id: 3,
    imgSrc: p3,
    name: "Nike Air Max 97 SE",
    description: "Men's Shoes",
    price: "$ 195.39",
  },
  {
    id: 4,
    imgSrc: p4,
    name: "Nike Air Force 1 '07",
    description: "Women's Shoes",
    price: "$ 94.22",
  },
  {
    id: 5,
    imgSrc: p5,
    name: "Nike Air Force 1 LV8 3",
    description: "Older Kids' Shoe",
    price: "$ 86.17",
  },
  {
    id: 6,
    imgSrc: p6,
    name: "Nike Sportswear Trend",
    description: "Older Kids' (Girls') High-waisted Woven Shorts",
    price: "$ 28.68",
  },
  {
    id: 7,
    imgSrc: p7,
    name: "Nike Dri-FIT Ready",
    description: "Men's Short-Sleeve Fitness Top",
    price: "$ 28.68",
  },
  {
    id: 8,
    imgSrc: p8,
    name: "Nike Air Force 1 Mid '07",
    description: "Men's Shoes",
    price: "$ 124.11",
  },
];

const BestOfAirMax = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalProducts = products.length;
  const visibleProducts = 3; 


  const nextProduct = () => {
    if (isTransitioning || currentIndex === totalProducts) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProducts);
  };

 
  const prevProduct = () => {
    if (isTransitioning || currentIndex === 0) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts
    );
  };

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); 
    }
  }, [isTransitioning]);

  return (
    <div className="best-of-air-max bg-white p-6 relative helvetica-neue">
      <h2 className="text-black text-xl font-semibold mb-6">Best of Air Max</h2>

      <div className="absolute top-6 right-6 flex gap-4">
        <button className="text-black font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition">
          Shop
        </button>
        <div className="flex gap-2">
          <button
            onClick={prevProduct}
            className="bg-transparent border-2 border-black text-black py-2 px-4 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={nextProduct}
            className="bg-transparent border-2 border-black text-black py-2 px-4 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="products mt-12 flex justify-center overflow-hidden">
        <div
          ref={carouselRef}
          className="product-carousel flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleProducts}%)`,
          }}
        >
          {[...products, ...products].map((product, index) => (
            <div
              key={index}
              className="product text-center flex-shrink-0 w-full md:w-1/3"
            >
              <Image
                className="w-[441.36px] h-[441.36px] rounded-lg shadow-lg"
                src={product.imgSrc}
                alt={product.name}
                width={441}
                height={441}
              />
              <h3 className="text-xl font-medium text-black mt-4 helvetica-neue">{product.name}</h3>
              <p className="text-gray-700 helvetica-neue">{product.description}</p>
              <p className="text-lg font-semibold text-black helvetica-neue">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestOfAirMax;
