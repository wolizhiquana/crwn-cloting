import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/user.context";

import Authentication from "./routers/authentication/authentication.component";
import Home from "./routers/home/home.component";
import Navigation from "./routers/navigation/navigation.components";

const Shop = () => {
  return <p>shop page</p>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "authentication", element: <Authentication /> },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
