import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="flex-grow">
        <section className="py-14 px-6 flex justify-center bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-custom-teal-blue mb-4">
              SUBSCRIBE!
            </h2>
            <p className="text-custom-teal-blue/60 mb-6 text-base font-light">
              Receive updates, hot deals, tutorials, discounts sent straight in
              your inbox every month
            </p>
            <div className="flex w-full max-w-xl mx-auto border border-custom-teal-blue rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-4 text-custom-teal-blue focus:outline-none"
              />
              <button className="px-6 py-3 bg-custom-teal-blue text-white font-bold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>

        <section className="bg-custom-navy-blue text-white py-8">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold uppercase">
                DO YOU HAVE QUESTIONS
              </h3>
              <p className="text-gray-300 mt-2 font-light text-base">
                We’ll help you to grow your career and growth
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to={'/contact-us'}>
                <button className="bg-white text-custom-teal-blue px-6 py-3 rounded-md font-semibold text-lg cursor-pointer">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-custom-teal-blue text-white py-36">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left justify-center">
            <div>
              <h2 className="text-5xl font-bold">KeyNest</h2>
              <p className="text-gray-300 mt-2">
                The Property Management Company
              </p>
              <div className="flex space-x-4 mt-4 text-2xl text-gray-300">
                <FaFacebookF />
                <FaXTwitter />
                <IoLogoPinterest />
                <FaLinkedinIn />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold">PROPERTY</h3>
              <ul className="mt-3 space-y-2 text-base font-light">
                {[
                  "Family Home",
                  "House & Villa",
                  "Apartment",
                  "Office & Studio",
                  "Villa & Condo",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold">PAGES</h3>
              <ul className="mt-3 space-y-2 text-base font-light">
                {["Home", "Properties", "Find Agents", "Contact Us"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold">COMPANY</h3>
              <ul className="mt-3 space-y-2 text-base font-light">
                {[
                  "About",
                  "Blog",
                  "Legal",
                  "Pricing",
                  "Affiliate",
                  "Login",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </footer>

      <div className="bg-custom-navy-blue text-center py-4 text-gray-300 text-sm">
        ©2025 KeyNest. Designed by Chamika Jayarathne
      </div>
    </div>
  );
};

export default Footer;
