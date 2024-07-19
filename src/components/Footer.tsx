import { NavLink, useLocation } from "react-router-dom";
import { theme } from "../theme";
import Wrapper from "./Wrapper";
import Logo from "./Logo";
import SubscribeCard from "../components/cards/SubscribeCard";

export default function Footer() {
  const location = useLocation();

  return (
    <Wrapper>
      <SubscribeCard />
      <footer className="flex justify-between font-primaryRegular">
        <div className="w-1/4">
          {/* logo */}
          <Logo />
          <p className="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            suscipit est aut voluptas at velit praesentium deserunt quae officia
            sit non fugiat, quo mollitia alias.
          </p>
        </div>

        <div>
          <p>QUICK LINKS</p>

          <ul className=" items-center">
            <li
              className="my-2 hover:text-lg"
              style={{
                color: location.pathname === "/" ? theme.text : "#000000",
              }}
            >
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li
              className="my-2 hover:text-lg"
              style={{
                color: location.pathname === "/about" ? theme.text : "#000000",
              }}
            >
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li
              className="my-2 hover:text-lg"
              style={{
                color: location.pathname === "/shop" ? theme.text : "#000000",
              }}
            >
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li
              className="my-2 hover:text-lg"
              style={{
                color:
                  location.pathname === "/contact" ? theme.text : "#000000",
              }}
            >
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p>CONTACT US</p>
        </div>

        <div>
          <p>SIGN UP</p>
        </div>
      </footer>
    </Wrapper>
  );
}
