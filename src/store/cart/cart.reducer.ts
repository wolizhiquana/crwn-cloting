import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
};

export const CART_INITAIL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (
  state = CART_INITAIL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action))
    return { ...state, cartItems: action.payload };

  if (setIsCartOpen.match(action))
    return { ...state, isCartOpen: action.payload };

  return state;
};
