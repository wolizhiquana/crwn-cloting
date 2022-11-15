import { memo } from "react";
import { CartItem as CartItemIntf } from "../../store/cart/cart.types";
import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";

export interface CartItemProps {
  cartItem: CartItemIntf;
}

const CartItem = memo(({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x {`$${price}`}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
