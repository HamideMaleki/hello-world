import React, { Component, useState } from "react";
const Product = ({ productName, count: propCount, children }) => {
  const [count, setCount] = useState(propCount);
  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{format()}</span>
      <button onClick={handlIncrement} className="m-2 btn btn-sm btn-success">
        +
      </button>
      <button onClick={handleDecrement} className="m-2 btn btn-sm btn-warning">
        -
      </button>
      <button onClick={handleDelete} className="m-2 btn btn-sm btn-danger">
        delete
      </button>
      {children}
    </div>
  );
  function handlIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleDelete() {
    console.log("delete");
  }
  function format() {
    if (count == 0) {
      return "zero";
    } else {
      return count;
    }
    //  return count !== 0 ? "zero" : count;
  }
};

export default Product;
