import { DndProvider } from "react-dnd";
import Grid from "./ui/Gridv2";
import { HeroHighlight } from "./ui/Highlight";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { Toaster } from "react-hot-toast";
import { NameContextProvider } from "./context/NameContext";

const App = () => {
  return (

    <NameContextProvider>

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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            background: "#4d5ec2",
            color: "white",
          },
        }}
      />
    </NameContextProvider>
  );
};

export default App;
