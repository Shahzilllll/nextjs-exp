import React from "react";
import Image from "next/image";

const Essentials = () => {
  return (
    <div className="bg-white py-16">
  
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 mb-6">
       
        <h2 className="text-xl font-semibold text-black">The Essentials</h2> /</div>

        

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image src="/img/mens.png" alt="Men's Essentials" width={400} height={500} className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-black">Men's</div>
        </div>

     
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image src="/img/womens.png" alt="Women's Essentials" width={400} height={500} className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-black">Women's</div>
        </div>

      
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image src="/img/kids.png" alt="Kids' Essentials" width={400} height={500} className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-black">Kids'</div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
