import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSED } from "../button/button.component";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSED.inverted}
        onClick={addProductToCart}
      >
        添加到购物车
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
