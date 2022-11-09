import React, { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";
import {
  CheckoutContaienr,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContaienr>
      <CheckoutHeader>
        <HeaderBlock>
          <span>商品</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>描述</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>数量</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>价格</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>移除</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <Total className="total">${cartTotal}</Total>
    </CheckoutContaienr>
  );
};

export default Checkout;
