import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/filebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
