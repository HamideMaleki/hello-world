import Product from "./product";
import React, { Component } from "react";

class Products extends Component {
  state = {
    products: [
      { id: 1, count: 20, productName: "laptop" },
      { id: 2, count: 10, productName: "phone" },
      { id: 3, count: 40, productName: "airpods" },
    ],
  };
  render() {
    return (
      <>
        {this.state.products.map((p, index) => (
          //<Product key={index} productName={p.productName} count={p.count} />
          <Product key={index} productName={p.productName} count={p.count}>
            <p>select a {p.productName}</p>
          </Product>
        ))}
      </>
      // <>
      //   <Product productName="laptop" />
      //   <Product productName="phone" />
      //   <Product productName="airpods" />
      // </>
    );
  }
}

export default Products;
