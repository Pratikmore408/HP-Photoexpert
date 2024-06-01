import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Modal({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
  buyNow,
}) {
  let [isOpen, setIsOpen] = useState(false);
  let [isEmptyCartOpen, setIsEmptyCartOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const cartItems = useSelector((state) => state.cart);

  function closeModal() {
    setIsOpen(false);
  }

  function closeEmptyCartModal() {
    setIsEmptyCartOpen(false);
  }

  function openModal() {
    if (cartItems.length === 0) {
      setIsEmptyCartOpen(true);
    } else {
      if (user) {
        setIsOpen(true);
      } else {
        navigate("/login");
      }
    }
  }
  return (
    <>
      {/* Button to open modal */}
      <div className="text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full bg-violet-600 py-2 text-center rounded-lg text-white font-bold"
        >
          Buy Now
        </button>
      </div>

      {/* Modal component */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* Modal content */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all bg-gray-50">
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
                      <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          {/* Form for user details */}
                          <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                              <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Full Name
                              </label>
                              <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                                name="name"
                                id="name"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Full Address
                              </label>
                              <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                name="address"
                                id="address"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="pincode"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Pincode
                              </label>
                              <input
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                type="text"
                                name="pincode"
                                id="pincode"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobileNumber"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Mobile Number
                              </label>
                              <input
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                          </form>
                          {/* Order button */}
                          <button
                            onClick={() => {
                              buyNow();
                              closeModal();
                            }}
                            type="button"
                            className="focus:outline-none w-full text-white bg-violet-600 hover:bg-violet-800 outline-0 font-medium rounded-lg text-sm px-5 py-2.5"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isEmptyCartOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeEmptyCartModal}
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* Modal content */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-gray-50">
                  <div className="text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Please add some items to the cart
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your cart is currently empty. Add some items to proceed
                        with the order.
                      </p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-800"
                        onClick={closeEmptyCartModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
