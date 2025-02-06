import React from "react";
import Image from "next/image";

const JoinUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-sm text-center">
      
        <div className="flex justify-center mb-4">
          <Image
            src="/img/nike.png"
            alt="Nike Logo"
            width={50}
            height={50}
            priority 
          />
        </div>

   
        <h2 className="text-lg font-bold tracking-wide text-black helvetica-neue">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-sm text-gray-800 mt-2 mb-6 helvetica-neue">
          Create your Nike Member profile and get first access to the very best of Nike 
          products, inspiration, and community.
        </p>

        <form className="space-y-4 helvetica-neue">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none text-black"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none text-black"
            required
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none text-black"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none text-black"
            required
          />
          <input
            type="date"
            className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none text-black"
            required
          />
          <p className="text-xs text-gray-800">
            Get a Nike Member Reward every year on your Birthday.
          </p>

         
          <select className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none text-black">
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="PK">Pakistan</option>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
          </select>

          <div className="flex space-x-4">
            <button
              type="button"
              className="w-1/2 border border-gray-400 py-3 rounded-md text-sm font-medium text-black"
            >
              Male
            </button>
            <button
              type="button"
              className="w-1/2 border border-gray-400 py-3 rounded-md text-sm font-medium text-black"
            >
              Female
            </button>
          </div>

          <div className="flex items-center text-sm text-gray-800">
            <input type="checkbox" className="mr-2" />
            <span>Sign up for emails to get updates from Nike on products, offers, and Member benefits.</span>
          </div>

        
          <p className="mt-2 text-xs text-gray-800">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="underline text-black">Privacy Policy</a> and{" "}
            <a href="#" className="underline text-black">Terms of Use</a>.
          </p>

          <button className="w-full bg-black text-white py-3 rounded-md font-semibold mt-4">
            JOIN US
          </button>
        </form>

        <p className="mt-6 text-sm text-black">
          Already a Member?{" "}
          <a href="/signup" className="text-black underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
