import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartProvider } from "./context/cart.context";
import { ProductsProvider } from "./context/products.context";
import { UserProvider } from "./context/user.context";
import Authentication from "./routers/authentication/authentication.component";
import Checkout from "./routers/checkout/checkout.component";
import Home from "./routers/home/home.component";
import Navigation from "./routers/navigation/navigation.components";
import Shop from "./routers/shop/shop.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "authentication", element: <Authentication /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
