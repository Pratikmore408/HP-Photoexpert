import React, { useContext } from "react";
import myContext from "../../context/data/myContext"; // Importing context
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux"; // Importing useSelector from Redux

function Navbar() {
  const context = useContext(myContext); // Using useContext to access the context
  const { mode, toggleMode } = context; // Destructuring mode and toggleMode from the context
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // Retrieving user data from localStorage

  const logout = () => {
    localStorage.clear("user"); // Clearing user data from localStorage
    navigate("/login"); // Redirecting to login page after logout
  };

  const cartItems = useSelector((state) => state.cart); // Using Redux's useSelector to get cart items

  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 ">
                <Link to={"/"} className="flex">
                  <div className="flex">
                    <h1
                      className="text-2xl font-bold text-black px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      HP-Photoexpert
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                {/* Navigation links */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/"}
                    className="text-sm font-medium text-gray-700 hover:text-violet-600"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-700 hover:text-violet-600"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium text-gray-700 hover:text-violet-600"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  )}

                  {user?.user?.email === "pratikmore408@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 hover:text-violet-600"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {/* Logout link */}
                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer hover:text-violet-600"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                </div>

                {/* Country flag */}
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-violet-600"
                  >
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                {/* User icon */}
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    {mode === "dark" ? (
                      <FaRegUser className="inline-block w-10 h-10 bg-white rounded-full" />
                    ) : (
                      <FaUserAlt className="inline-block w-10 h-10 rounded-full" />
                    )}
                  </a>
                </div>

                {/* Dark mode toggle */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
