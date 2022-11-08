import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/filebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            购买
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              注销
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              登陆
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
