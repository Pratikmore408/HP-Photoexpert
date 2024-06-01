import React from "react";
import Navbar from "../navbar/Navbar"; // Import Navbar component
import Footer from "../footer/Footer"; // Import Footer component

function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Navbar /> {/* Navbar component */}
      <div className="content">{children}</div>{" "}
      {/* Content passed as children */}
      <Footer /> {/* Footer component */}
    </div>
  );
}

export default Layout;
