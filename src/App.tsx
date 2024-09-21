import { DndProvider } from "react-dnd";
import Grid from "./ui/Gridv2";
import { HeroHighlight } from "./ui/Highlight";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

const App = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <HeroHighlight className="min-h-dvh w-full grid grid-rows-[auto_2fr_auto]  ">
      
        <Header />
        <main className="">
          <section className=" mx-auto overflow-auto p-10 max-w-3xl">
            <Grid />
          </section>
        </main>
        <Footer />
      </HeroHighlight>
    </DndProvider>
  );
};

export default App;
