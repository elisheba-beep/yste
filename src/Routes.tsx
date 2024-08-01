import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Product from "./pages/Shop/[id]";
import Category from "./pages/Category";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
      <Route path="/shop/" Component={Shop} />
      <Route path="/shop/:id" Component={Product} />
      <Route path="/:Category" Component={Category} />
    </Routes>
  );
}
