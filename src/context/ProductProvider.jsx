import React, { useState, useEffect } from "react";
import ProductContext from "./ProductContext";

const API_KEY = "cJIJCsMTwNL01knnyPKozuT4ISxP5jh4ffdDfuJy"
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://api.printful.com/store/products", {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          },
      cache: "no-cache",
    });
    const data = await response.json();
    setProducts(Array.isArray(data.result) ? data.result : []);
  };

  useEffect(() => {
    fetchProducts();
  }, []); 
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
