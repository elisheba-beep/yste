import { NavLink } from "react-router-dom";
import { theme } from "../theme";

export default function Logo() {
  return (
    <div className="cursor-pointer">
      <NavLink to={"/"}>
        <p className="text-4xl font-primaryBold" style={{ color: theme.text }}>
          yste
        </p>
      </NavLink>
    </div>
  );
}
