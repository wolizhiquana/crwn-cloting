import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartCount,
  selectCartItems,
} from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartCount ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>购物车为空</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>去付款</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
