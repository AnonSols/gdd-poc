import { Link, NavLink } from "react-router-dom";
import { useNameContext } from "../hooks/useNameContext";

const Header = () => {
  const { userName } = useNameContext();
  return (
    <nav className="px-9 py-7 md:px-10 md:py-8 lg:p-10 flex items-center justify-around backdrop-blur-md bg-slate-100/0.3">
      <Link
        to="/"
        className="tracking-wider text-sm sm:text-md  md:text-lg lg:text-2xl font-bold text-white"
        
      >
        {userName} Grid Drag-and-Drop PoC
      </Link>

      <ul className="flex tracking-wider text-md  md:text-lg lg:text-xl font-bold text-white items-center justify-between gap-4 lg:gap-6 transition-all duration-300">
        <NavLink to="grid-one" style={({isActive})=>({
          color: isActive? "#a3e635":""
        })}>
          Grid 1
        </NavLink>
        <NavLink to="grid-two" style={({isActive})=>({
          color: isActive? "#a3e635":""
        })}>
          Grid 2
        </NavLink>
      </ul>

      <ul className=" gap-4 hidden lg:flex">
        <a
          href="https://github.com/AnonSols/gdd-poc"
          className="tracking-wider text-md  md:text-lg lg:text-xl font-bold text-white"
          target="blank"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/egede-solomon-32766a23a/"
          className="tracking-wider text-md  md:text-lg lg:text-xl  font-bold text-white"
        >
          LinkedIn
        </a>
      </ul>
    </nav>
  );
};

export default Header;
