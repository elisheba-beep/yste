import Wrapper from "./Wrapper";
import { theme } from "../theme";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <nav className="flex items-center justify-between">
        {/* logo */}
        <p className="text-4xl font-primaryBold" style={{ color: theme.text }}>
          yste
        </p>

        {/* nav items */}
        <ul className="flex items-center">
          <li className="mx-2 hover:text-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-2 hover:text-lg">
            <Link to={"/about"}>About</Link>
          </li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>Header</div>
    </Wrapper>
  );
}
