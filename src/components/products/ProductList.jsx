import React, { useContext } from "react";
import ProductContext from "../../context/ProductContext";

export default function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Products</h1>
      {products && products.length > 0 ? (
        <ul>
          {products.map((prod) => (
            <li key={prod.id}>
              <h2>{prod.title}</h2>
              <img src={prod.image} alt={prod.title} />
              <p>{prod.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}
