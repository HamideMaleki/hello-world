import { useState } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, count: 7, productName: "laptop" },
    { id: 2, count: 4, productName: "phone" },
    { id: 3, count: 6, productName: "airpods" },
  ]); //useState
  return (
    <>
      {products.map((p, index) => (
        <Product key={index} productName={p.productName} count={p.count}>
          <p>Hi select a {p.productName} </p>
        </Product>
      ))}
    </>
    // <>
    //   <Product productName="laptop" />
    //   <Product productName="phone" />
    //   <Product productName="airpods" />
    // </>
  );
};

export default Products;
