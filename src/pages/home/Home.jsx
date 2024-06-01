import React from "react";
import Layout from "../../components/layout/Layout";
import Allproducts from "../allproducts/AllProducts";

function Home() {
  return (
    <Layout>
      <div className="relative w-full h-96 overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://blog.c41s.com/wp-content/uploads/2024/04/Sample-Frame-Finishes-Roomset.jpg"
          alt="Home Cover"
        />
      </div>
      <Allproducts />
    </Layout>
  );
}

export default Home;
