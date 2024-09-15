import Grid from "./components/Grid";

const App = () => {
  const year = new Date().getFullYear();
  return (
    <div className="h-dvh w-full grid grid-rows-[auto_2fr_auto]  ">
      <header className="items-center justify-center flex py-4">
        <h1 className="tracking-wider text-2xl  md:text-3xl lg:text-4xl font-bold text-stone-700">
          Ubeaths's Grid Drag-and-Drop PoC
        </h1>
      </header>
      <main className="overflow-scroll ">
        <section className=" mx-auto p-10 max-w-3xl">
          <Grid />
        </section>
      </main>
      <footer className="text-stone-700 tracking-wider items-center justify-center flex py-4">
        {" "}
        Copyright ©️ {year} made with ❤️ by Egede
      </footer>
    </div>
  );
};

export default App;
