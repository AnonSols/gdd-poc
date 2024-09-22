import { useNameContext } from "../hooks/useNameContext";

 
const Header = () => {

  const {userName} = useNameContext()
  return (
    <header className="items-center justify-center flex py-4">
      <h1 className="tracking-wider text-2xl  md:text-3xl lg:text-4xl font-bold text-white">
        {userName} Grid Drag-and-Drop PoC
      </h1>
    </header>
  );
}

export default Header