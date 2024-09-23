import Footer from "./Footer";
import { HeroHighlight } from "./Highlight";
import { Outlet } from "react-router-dom";
import Nav from "./NavBar";
const AppLayout = () => {
  return (
    <HeroHighlight className="min-h-dvh w-full grid grid-rows-[auto_2fr_auto]  ">
      <header>
        <Nav />{" "}
      </header>
      <main className="">
        <section className=" mx-auto overflow-auto p-10 max-w-3xl">
          {<Outlet />}
        </section>
      </main>
      <Footer />
    </HeroHighlight>
  );
};

export default AppLayout;
