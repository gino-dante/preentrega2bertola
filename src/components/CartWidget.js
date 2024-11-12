// src/components/CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Usando react-icons para un ícono de carrito

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} color="white" />
      <span className="badge bg-primary">3</span>
    </div>
  );
};

export default CartWidget;
