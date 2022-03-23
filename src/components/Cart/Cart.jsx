import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="cart">
      <h1>Added Meals</h1>
      {cart.map((meal) => (
        <ul>
          <li>{meal}</li>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
