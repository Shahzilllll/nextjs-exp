import React from "react";
import Image from "next/image";

const Dontmiss = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-16 helvetica-neue">
      <div className="relative max-w-6xl w-full">
      
        <Image
          src="/img/dontmiss.png" 
          alt="Flight Essentials"
          width={1440}
          height={700}
          className="shadow-lg"
        />


        <div className="absolute top-[-55px] left-[1px] bg-white bg-opacity-70 p-3 text-center font-bold text-lg text-black w-[140px] h-[27px] flex items-center justify-center helvetica-neue">
  Don't Miss
</div>
      </div>

      <div className="text-center mt-8 px-4 w-full">
        <div className="mx-auto w-[806px]">
          <h1 className="text-black font-bold text-4xl helvetica-neue">FLIGHT ESSENTIALS</h1>

          <p className="text-lg text-gray-700 mt-4 helvetica-neue">
            Your daily-built, all-week, works-for-every-fit look only Jordan Brand can deliver.
          </p>
        </div>

    
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition helvetica-neue">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dontmiss;
