import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      {/* Search Bar */}
      <div className="text-center mb-8 border-b pb-4">
        <h1 className="text-xl font-bold tracking-wide helvetica-neue">
          GET HELP
        </h1>

        <div className="relative w-full max-w-lg mx-auto mt-4 helvetica-neue">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm outline-none pr-10"
          />
          <HiMiniMagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* FAQ Section */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4 helvetica-neue">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-sm text-gray-700 mb-4 helvetica-neue">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy, and we accept the following payment options:
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside mb-4 helvetica-neue">
            <li>
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-sm text-gray-700 mb-6 helvetica-neue">
            <Link href="/joinus">
              <span className="underline font-medium cursor-pointer hover:text-gray-900 helvetica-neue">
                Nike Members
              </span>
            </Link>{" "}
            can store multiple debit or credit cards in their profile for faster
            checkout. If you’re not already a Member,{" "}
            <Link href="/joinus">
              <span className="underline font-medium cursor-pointer hover:text-gray-900 helvetica-neue">
                join us
              </span>
            </Link>{" "}
            today.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mb-6">
            <Link href="/joinus">
              <button className="px-6 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-gray-950">
                JOIN US
              </button>
            </Link>

            <button className="px-6 py-2 text-sm font-bold text-black border border-black rounded-full hover:bg-gray-300">
              SHOP NIKE
            </button>
          </div>
          {/* FAQs */}
          <h3 className="text-md font-bold mb-2 helvetica-neue">FAQs</h3>
          <div className="text-sm text-gray-700 space-y-4">
            <div>
              <p className="font-bold helvetica-neue">
                Does my card need international purchases enabled?
              </p>
              <p>
                Yes, we recommend asking your bank to enable international
                purchases on your card.
              </p>
            </div>
            <div>
              <p className="font-bold helvetica-neue">
                Can I pay for my order with multiple methods?
              </p>
              <p>
                No, payment for Nike orders can’t be split between multiple
                payment methods.
              </p>
            </div>
            <div>
              <p className="font-bold helvetica-neue">
                Why don’t I see Apple Pay as an option?
              </p>
              <p>
                Apple Pay requires a compatible Apple device and a supported
                card in your Wallet. You also need to use Safari.
              </p>
            </div>
            <div>
              <p className="font-bold">How do I track my Nike order?</p>
              <p>
                You can track your order by logging into your Nike account and
                visiting the "Orders" page. You'll find real-time updates and
                tracking details there.
              </p>
            </div>

            <div>
              <p className="font-bold">
                Can I return my Nike shoes after wearing them?
              </p>
              <p>
                Yes! Nike offers a 60-day wear test for most shoes. If you're
                not satisfied, you can return them—even if you've worn
                them—within that period.
              </p>
            </div>

            <div>
              <p className="font-bold">Does Nike offer student discounts?</p>
              <p>
                Yes! Nike provides a **10% discount** for students. You just
                need to verify your student status through their official
                verification system.
              </p>
            </div>

            <div>
              <p className="font-bold">Can I customize my own Nike shoes?</p>
              <p>
                Absolutely! Nike offers a "Nike By You" customization service
                where you can design and personalize your own sneakers.
              </p>
            </div>

            <div>
              <p className="font-bold">
                What should I do if my Nike product is defective?
              </p>
              <p>
                If you receive a defective product, you can request a return or
                exchange through Nike's warranty policy. Contact customer
                service for further assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-l pl-6">
          <h3 className="text-md font-bold mb-6 text-center">CONTACT US</h3>

          {/* Phone */}
          <div className="flex flex-col items-center mb-8">
            <FaMobileScreenButton className="text-5xl mb-2" />
            <p className="text-center text-sm text-gray-700">
              <strong>000 800 919 0566</strong> <br />
              Products & Orders: 24 hours a day, 7 days a week.
            </p>
          </div>

          {/* Message */}
          <div className="flex flex-col items-center mb-8">
            <RiMessage2Fill className="text-5xl mb-2" />
            <p className="text-center text-sm text-gray-700">
              24 hours a day <br /> 7 days a week
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center mb-8">
            <FaEnvelope className="text-5xl mb-2" />
            <p className="text-center text-sm text-gray-700">
              We’ll reply within <br /> five business days.
            </p>
          </div>

          {/* Store Locator */}
          <div className="flex flex-col items-center">
            <ImLocation2 className="text-5xl mb-2" />
            <p className="text-center text-sm text-gray-700">
              <strong>STORE LOCATOR</strong> <br />
              Find Nike retail stores near you.
            </p>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-6">
          <p className="text-sm font-medium">Was this answer helpful?</p>
          <div className="flex space-x-4 mt-2">
            <button className="text-black text-xl hover:text-gray-600">
              <FaThumbsUp />
            </button>
            <button className="text-black text-xl hover:text-gray-600">
              <FaThumbsDown />
            </button>
          </div>
          <p className="py-3 text-gray-700 helvetica-neue hover:text-gray-500">
            RELATED
          </p>
        </div>

        <div className="mt-32">
          <a
            href="#"
            className=" -ml-96 underline helvetica-neue hover:text-gray-900"
          >
            {" "}
            WHAT ARE NIKE'S DELIVERY OPTIONS?
          </a>
        </div>
        <div className="mt-40">
          <a
            href="#"
            className=" -ml-[825px] underline helvetica-neue hover:text-gray-900"
          >
            {" "}
            HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
