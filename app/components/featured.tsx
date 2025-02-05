import React from "react";
import ft from "../../img/ft.png";

const Featured = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-16 helvetica-neue">
      <div className="relative max-w-6xl w-full">
        <img
          src={ft.src}
          alt="Nike Air Max Pulse"
          className="w-[1440px] h-[700px] shadow-lg"
        />
        
        <div className="absolute top-[-55px] left-[1px] bg-white bg-opacity-70 p-3 text-center font-bold text-lg text-black w-[96.26px] h-[27px]">
          Featured
        </div>
      </div>

      <div className="text-center mt-8 px-4 w-full">
        <div className="mx-auto w-[806px]">
          <h1 className="text-black font-bold text-4xl"> 
            STEP INTO WHAT FEELS GOOD
          </h1>

          <p className="text-lg text-gray-700 mt-4">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
