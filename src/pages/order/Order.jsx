import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";

function Order() {
  // Get user ID from localStorage
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;

  // Accessing context to get mode, loading state, and order data
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  return (
    <Layout>
      {/* Check if there are orders */}
      {order.length > 0 ? (
        <>
          {/* Render each order */}
          <div className="h-full pt-10">
            {order
              .filter((obj) => obj.userid === userid)
              .map((order, index) => (
                <div
                  key={index}
                  className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                >
                  {/* Render each item in the order */}
                  {order.cartItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="rounded-lg md:w-2/3">
                      <div
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                        style={{
                          backgroundColor: mode === "dark" ? "#282c34" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        <img
                          src={item.imageUrl}
                          alt="product-image"
                          className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2
                              className="text-lg font-bold text-gray-900"
                              style={{
                                color: mode === "dark" ? "white" : "",
                              }}
                            >
                              {item.title}
                            </h2>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{
                                color: mode === "dark" ? "white" : "",
                              }}
                            >
                              {item.description}
                            </p>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{
                                color: mode === "dark" ? "white" : "",
                              }}
                            >
                              {item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/no-order-found-10666889-8573465.png?f=webp"
            alt="No Orders"
            className="mx-auto"
            style={{
              maxWidth: "300px",
              margin: "20px 0",
            }}
          />
          <h2
            className="block text-2xl"
            style={{
              backgroundColor: mode === "dark" ? "#282c34" : "",
              color: mode === "dark" ? "white" : "black",
            }}
          >
            OOPS!! Your box is Empty Why don't you fill it up by ordering some
            frames
          </h2>
        </div>
      )}
    </Layout>
  );
}

export default Order;
