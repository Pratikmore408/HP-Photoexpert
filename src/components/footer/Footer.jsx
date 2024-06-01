import React, { useContext } from "react";
import myContext from "../../context/data/myContext"; // Importing the context
import { Link } from "react-router-dom";

function Footer() {
  const context = useContext(myContext); // Accessing context
  const { mode } = context; // Destructuring mode from context
  return (
    <div>
      <footer
        className="text-gray-600 body-font bg-gray-300"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        {/* Footer content */}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Categories */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {/* Categories title */}
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                CATEGORIES
              </h2>
              {/* Categories navigation */}
              <nav className="list-none mb-10">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Made In Bharat
                  </a>
                </li>
              </nav>
            </div>
            {/* Customer Service */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {/* Customer Service title */}
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Customer Service
              </h2>
              {/* Customer Service navigation */}
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/returnpolicy"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>

            {/* Services */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {/* Services title */}
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Services
              </h2>
              {/* Services navigation */}
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/privacypolicy"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Delivery
                  </Link>
                </li>
              </nav>
            </div>
            {/* Payment methods */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {/* Payment methods image */}
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
            </div>
          </div>
        </div>

        {/* Bottom footer section */}
        <div
          className="bg-gray-200"
          style={{
            backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            {/* Brand */}
            <Link to={"/"} className="flex">
              <div className="flex ">
                <h1
                  className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  HP-Photoexpert
                </h1>
              </div>
            </Link>
            {/* Copyright */}
            <p
              className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              © 2023 HP-Photoexpert —
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                www.hpphotoexpert.com
              </a>
            </p>
            {/* Social media icons */}
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Add more social media icons here */}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
