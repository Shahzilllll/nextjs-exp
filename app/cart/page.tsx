import React from 'react';
import Link from 'next/link';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-white text-black px-8 w-full overflow-hidden">
    
      <div className="container mx-auto mt-10 flex flex-col lg:flex-row gap-10 bg-white">

       
        <div className="flex-1">
          <h1 className="text-2xl font-bold helvetica-neue">Bag</h1>
          
          <div className="flex flex-col items-center justify-center h-64 border border-gray-300 mt-6 rounded-md bg-white">
            <p className="text-lg text-gray-700 helvetica-neue">Your cart is empty.</p>
            <Link href="/" className="mt-4 px-6 py-2 text-white bg-black rounded-full hover:bg-gray-900 transition duration-200">
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 helvetica-neue">Summary</h2>
          <div className="flex justify-between text-gray-700">
            <p>Subtotal</p>
            <p>$0.00</p>
          </div>
          <div className="flex justify-between text-gray-700 mt-2">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>$0.00</p>
          </div>

         
          <button disabled className="w-full mt-6 bg-gray-400 text-white py-2 rounded-full cursor-not-allowed">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
