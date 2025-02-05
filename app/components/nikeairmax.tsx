import React from "react";
import image from "../../img/image.png";

const NikeAirMaxPulse = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-16">
      <div className="relative max-w-6xl w-full">
        <img
          src={image.src}
          alt="Nike Air Max Pulse"
          className="w-[1440px] h-[700px] shadow-lg"
        />
      </div>

      <div className="text-center mt-8 px-4">
        <h1 className="text-black font-bold helvetica-neue">FIRST LOOK</h1>
        <h2 className="text-4xl text-black font-bold mb-4 helvetica-neue">
          NIKE AIR MAX PULSE
        </h2>
        <h3 className="text-lg text-gray-700 mb-2 helvetica-neue">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        </h3>
        <p className="text-lg text-gray-700 mb-6 helvetica-neue">
          —designed to push you past your limits and help you go to the max.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition helvetica-neue">
          Notify Me
        </button>
        <button className="bg-gray-200 text-black px-6 py-3 rounded-full hover:bg-gray-300 transition helvetica-neue">
          Shop Air Max
        </button>
      </div>
    </div>
  );
};

export default NikeAirMaxPulse;
