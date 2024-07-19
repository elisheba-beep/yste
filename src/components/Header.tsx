import Wrapper from "./Wrapper";
import { theme } from "../theme";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  const location = useLocation();

  return (
    <Wrapper>
      <nav className="flex items-center justify-between">
        {/* logo */}
        <Logo />

        {/* search bar */}
        <SearchBar
          text="Search"
          placeholder="search for something"
          width="50%"
        />

        {/* nav items */}
        <ul className="flex items-center">
          <li
            className="mx-2 hover:text-lg"
            style={{
              color: location.pathname === "/" ? theme.text : "#000000",
            }}
          >
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            className="mx-2 hover:text-lg"
            style={{
              color: location.pathname === "/about" ? theme.text : "#000000",
            }}
          >
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li
            className="mx-2 hover:text-lg"
            style={{
              color: location.pathname === "/shop" ? theme.text : "#000000",
            }}
          >
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li
            className="mx-2 hover:text-lg"
            style={{
              color: location.pathname === "/contact" ? theme.text : "#000000",
            }}
          >
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}
