import { Route, Routes } from "react-router-dom";
import Home from "./routers/home/home.component";

import Navigation from "./routers/navigation/navigation.components";

const Shop = () => {
  return <p>shop page</p>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
