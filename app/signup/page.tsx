import React from "react";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-sm text-center">
        
        <div className="flex justify-center mb-4">
          <Image src="/img/nike.png" alt="Nike Logo" width={50} height={50} />
        </div>

      
        <h2 className="text-lg font-bold tracking-wide text-black helvetica-neue">YOUR ACCOUNT</h2>
        <h2 className="text-lg font-bold tracking-wide mb-6  text-black helvetica-neue">FOR EVERYTHING NIKE</h2>


        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm outline-none"
          />
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2  text-black helvetica-neue" />
              Keep me signed in
            </label>
            <a href="#" className="text-black underline   helvetica-neue">Forgotten your password?</a>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-md font-semibold">
            SIGN IN
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-600   helvetica-neue">
          By logging in, you agree to Nike's{" "}
          <a href="#" className="underline   helvetica-neue hover:text-gray-800">Privacy Policy</a> and{" "}
          <a href="#" className="underline   helvetica-neue hover:text-gray-800">Terms of Use</a>.
        </p>

        <p className="mt-6 text-sm text-black helvetica-neue">
          Not a Member? <a href="joinus" className="text-black underline hover:text-gray-900">Join Us.</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
