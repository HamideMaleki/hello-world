import React, { Component } from "react";
class Product extends Component {
  state = {
    count: this.props.count,
  };
  render() {
    const { productName } = this.props;
    // ok :    const { count } = this.props;
    // ok :    const { count: c } = this.props;
    return (
      <div>
        {this.state.count !== 0 ? (
          <>
            <span className="m-2 text-info">{productName}</span>
            <span className="m-2 badge bg-primary">{this.format()}</span>
            <button
              onClick={this.handleIncrement}
              className="m-2 btn btn-sm btn-success"
            >
              +
            </button>
            <button
              onClick={this.handleDecrement}
              className="m-2 btn btn-sm btn-warning"
            >
              -
            </button>
            <button
              onClick={this.handleDelete}
              className="m-2 btn btn-sm btn-danger"
            >
              delete
            </button>
            {this.props.children}
          </>
        ) : (
          <h1>There is no product</h1>
        )}
      </div>
    ); //return
  } //render

  handleIncrement = () => {
    //const count = this.state.count;
    const { count: c } = this.state;
    this.setState({ count: c + 1 });
    console.log(this.state);
  };
  //   handleIncrement() {
  //     console.log("Increment ...");
  //     console.log(this);
  //   }
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  //   handleDecrement() {
  //     console.log("Decrement ...");
  //     console.log(this);
  //   }

  handleDelete = () => {
    console.log("Delete ...");
    console.log(this);
  };
  //   handleDelete() {
  //     console.log("Delete ...");
  //     console.log(this);
  //   }
  format() {
    if (this.state.count === 0) {
      return "zero";
    } else {
      return this.state.count;
    }
  } //format
} //class

export default Product;
