import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./global.styles";
import { checkUserSession } from "./store/user/user.action";

const Navigation = lazy(
  () => import("./routers/navigation/navigation.components")
);
const Home = lazy(() => import("./routers/home/home.component"));
const Shop = lazy(() => import("./routers/shop/shop.component"));
const Authentication = lazy(
  () => import("./routers/authentication/authentication.component")
);
const Checkout = lazy(() => import("./routers/checkout/checkout.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
