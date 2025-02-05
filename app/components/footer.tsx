import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative helvetica-neue"> 
      
      <div className="absolute top-4 right-4 flex space-x-4 text-white">
        <a href="https://www.instagram.com/shahzilllll/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        </a>
        <a href="https://www.facebook.com/shahzilllll" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/shahzil-nadeem-ab70711b1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        </a>
      </div>

      <footer className="text-gray-600 body-font">
        <div className="container w-[1440px] h-[331px] mx-auto flex flex-wrap py-8">
         
          <div className="flex w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="flex flex-col justify-between w-full">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
              <nav className="list-none mb-12">
                <li className="mb-4"><a href="#" className="text-white hover:text-gray-800">Find A Store</a></li>
                <li className="mb-4"><a href="#" className="text-white hover:text-gray-800">Become A Member</a></li>
                <li className="mb-4"><a href="#" className="text-white hover:text-gray-800">Sign Up for Email</a></li>
                <li className="mb-4"><a href="#" className="text-white hover:text-gray-800">Send Us Feedback</a></li>
                <li className="mb-4"><a href="#" className="text-white hover:text-gray-800">Student Discounts</a></li>
              </nav>
            </div>
          </div>

          <div className="flex w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="flex flex-col justify-between w-full">
              <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">GET HELP</h2>
              <nav className="list-none mb-10">
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Order Status</a></li>
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Delivery</a></li>
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Returns</a></li>
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Payment Options</a></li>
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us On Nike.com Inquiries</a></li>
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us On All Other Inquiries</a></li>
              </nav>
            </div>
          </div>

          <div className="flex w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="flex flex-col justify-between w-full">
              <h2 className="title-font font-bold text-white tracking-widest text-sm">ABOUT NIKE</h2>
              <nav className="list-none mb-10">
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">News</a></li>
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Investors</a></li>
                <li className="mb-4"><a href="#" className="text-gray-600 hover:text-gray-800">Sustainability</a></li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a]">
          <div className="container px-5 py-6 mx-auto flex justify-between items-center sm:flex-row flex-col">
<div className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
  <div className="flex items-center">
    <li className='font-bold text-white mr-6 flex items-center'>
      <CiLocationOn className='mr-2' />
      <a 
        href="https://www.google.com/maps/search/nike+pakistan/@24.7945696,67.0036441,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-gray-300 transition-colors duration-200"
      >
        Pakistan
      </a>
    </li>
    <span>© 2023 Nike, Inc. All Rights Reserved</span>
  </div>
</div>

            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-500 text-sm hover:text-white">Guides</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white">Terms of Use</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white">Terms of Sale</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white">Nike Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
