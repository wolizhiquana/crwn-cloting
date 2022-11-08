import React, { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>商品</span>
        </div>
        <div className="header-block">
          <span>描述</span>
        </div>
        <div className="header-block">
          <span>数量</span>
        </div>
        <div className="header-block">
          <span>价格</span>
        </div>
        <div className="header-block">
          <span>移除</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <span className="total">${cartTotal}</span>
    </div>
  );
};

export default Checkout;
