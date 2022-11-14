import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import {
  CheckoutContaienr,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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

      <PaymentForm />
    </CheckoutContaienr>
  );
};

export default Checkout;
