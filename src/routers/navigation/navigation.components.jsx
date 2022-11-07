import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
            登陆
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
