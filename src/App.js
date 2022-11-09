import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartProvider } from "./context/cart.context";
import { CategoriesProvider } from "./context/categories.context";
import { UserProvider } from "./context/user.context";
import Authentication from "./routers/authentication/authentication.component";
import Category, {
  loader as CategoryLoader,
} from "./routers/category/category.component";
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
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:category",
        loader: CategoryLoader,
        element: <Category />,
      },
      { path: "authentication", element: <Authentication /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  );
};

export default App;
