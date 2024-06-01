import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";
import { fireDB } from "../../firebase/FirebaseConfig";

function ProductInfo() {
  // Accessing context to get loading state and setLoading function
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // State variable to hold product data
  const [products, setProducts] = useState("");

  // Getting parameters from the URL
  const params = useParams();

  // Function to fetch product data from Firestore
  const getProductData = async () => {
    setLoading(true); // Show loading state

    try {
      // Get product document from Firestore
      const productTemp = await getDoc(doc(fireDB, "products", params.id));

      // Set product data to state
      setProducts(productTemp.data());

      setLoading(false); // Hide loading state
    } catch (error) {
      console.log(error);
      setLoading(false); // Hide loading state
    }
  };

  // Fetch product data on component mount
  useEffect(() => {
    getProductData();
  }, []);

  // Redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // Function to add product to cart
  const addCart = (products) => {
    dispatch(addToCart(products)); // Dispatch action to add to cart
    toast.success("add to cart"); // Show success message
  };

  // Update local storage when cart items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          {products && (
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded"
                src={products.imageUrl}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {products.title}
                </h1>
                <div className="flex mb-4">
                  {/* Rating stars */}
                  <span className="flex items-center">
                    {/* Rating stars icons */}
                  </span>
                </div>
                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                  {products.description}
                </p>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹{products.price}
                  </span>
                  {/* Add to cart button */}
                  <button
                    onClick={() => addCart(products)}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
