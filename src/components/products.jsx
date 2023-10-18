//import Product from "./functional/product";
import React, { Component } from "react";

class Products extends Component {
  state = {};
  render() {
    return (
      <>
        <Product productName="laptop" />
        <Product productName="phone" />
        <Product productName="airpods" />
      </>
    );
  }
}

export default Products;
