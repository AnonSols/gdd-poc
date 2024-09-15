import Grid from "./components/Grid";
import { HeroHighlight } from "./components/Highlight";

const App = () => {
  const year = new Date().getFullYear();

  return (
    <HeroHighlight className="h-dvh w-full grid grid-rows-[auto_2fr_auto]  ">
      <header className="items-center justify-center flex py-4">
        <h1 className="tracking-wider text-2xl  md:text-3xl lg:text-4xl font-bold text-white">
          Ubeath's Grid Drag-and-Drop PoC
        </h1>
      </header>
      <main className="">
        <section className=" mx-auto overflow-auto p-10 max-w-3xl">
          <Grid />
        </section>
      </main>
      <footer className="text-white tracking-wider items-center justify-center flex py-4">
        {" "}
        Copyright ©️ {year} made with ❤️ by Egede
      </footer>
    </HeroHighlight>
  );
};

export default App;
