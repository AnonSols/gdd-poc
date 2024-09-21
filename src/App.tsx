import { DndProvider } from "react-dnd";
import Grid from "./components/Gridv2";
import { HeroHighlight } from "./components/Highlight";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const year = new Date().getFullYear();

  return (
    <DndProvider backend={HTML5Backend}>
      <HeroHighlight className="min-h-dvh w-full grid grid-rows-[auto_2fr_auto]  ">
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
          Copyright ©️ {year} made with ❤️ by{" "}
          <a className="mx-2" href="https://github.com/AnonSols">
            {" "}
            <b>Egede</b>
          </a>
        </footer>
      </HeroHighlight>
    </DndProvider>
  );
};

export default App;
