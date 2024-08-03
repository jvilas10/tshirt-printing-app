import React from 'react';
import { useSelector } from 'react-redux';

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt="Design" />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
