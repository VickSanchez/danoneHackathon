import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Container = ({ children }) => {
  return (
    <div className="min-h-screen h-full surface-section layout-wrapper layout-wrapper-light  flex flex-column">
      <div className="px-3 py-2">
        <Header />
        {children}
      </div>
      <div className="px-3 py-2 mt-auto">
        <Footer />
      </div>
    </div>
  );
};
