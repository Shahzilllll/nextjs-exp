import React from "react";

const FooterMenu = () => {
  return (
    <div className="flex justify-center py-10 bg-white">
      <div className="w-[880px] h-[192px] flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 gap-10 text-sm text-black text-center">

       
          <div>
            <h3 className="font-bold mb-2 helvetica-neue">Icons</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline helvetica-neue">Air Force 1</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Huarache</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Air Max 90</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Air Max 95</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2 helvetica-neue">Shoes</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline helvetica-neue">All Shoes</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Custom Shoes</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Jordan Shoes</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Running Shoes</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold mb-2 helvetica-neue">Clothing</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline helvetica-neue">All Clothing</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Modest Wear</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Hoodies & Pullovers</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Shirts & Tops</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-bold mb-2 helvetica-neue">Kids'</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline helvetica-neue">Infant & Toddler Shoes</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Kids' Shoes</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Kids' Jordan Shoes</a></li>
              <li><a href="#" className="hover:underline helvetica-neue">Kids' Basketball Shoes</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
