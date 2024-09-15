import { useEffect, useMemo, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

interface LayoutItem extends Layout {
  i: string;
}
const Grid = () => {
  const savedLayout: LayoutItem[] = JSON.parse(
    localStorage.getItem("layout") || "[]"
  ) || [
    { i: "1", x: 0, y: 0, w: 3, h: 2, static: false },
    { i: "2", x: 3, y: 0, w: 3, h: 2 },
    { i: "3", x: 6, y: 0, w: 3, h: 2 },
  ];

  //this is our snapshot itself.
  const [layout, setLayout] = useState<LayoutItem[]>(savedLayout);

  /* so basically this history is an array of snapshot.
     let me elaborate;
     the first dimension represent the entire history of the layout, which means each of the element in the first array is a snapshot of the layout at a particular time

     the second dimension represent the snapshot which contains an object of our layout items object, where an individual item represent position and size in the grid
     */

  const [history, setHistory] = useState<LayoutItem[][]>([savedLayout]);

  /*
     our history track the current position in the history to enable our undo and redo actions
     */
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const defaultLayout = useMemo(
    () => [
      { i: "1", x: 0, y: 0, w: 3, h: 2, static: false },
      { i: "2", x: 3, y: 0, w: 3, h: 2 },
      { i: "3", x: 6, y: 0, w: 3, h: 2 },
    ],
    []
  );

  useEffect(() => {
    const savedLayout = localStorage.getItem("layout");
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    } else {
      setLayout(defaultLayout);
    }
  }, [defaultLayout]);

  /*
     This function is called when a user drags or resizes an item,  it basically update the layout state and stores the new layout in localstorage to keep the state persistent between sessions.
      */

  const onLayoutChange = (newLayout: LayoutItem[]) => {
    setLayout(newLayout);
    localStorage.setItem("layout", JSON.stringify(newLayout));

    const newHistory = [...history.slice(0, historyIndex + 1), newLayout];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const [counter, setCounter] = useState(4);
  function addItem() {
    const newItem = { i: `${counter}`, x: 0, y: 0, w: 3, h: 2, static: false };

    setLayout([...layout, newItem]);
    setCounter((c) => c + 1);
  }
  const undo = () => {
    if (historyIndex > 0) {
      setLayout(history[historyIndex - 1]);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setLayout(history[historyIndex + 1]);
      setHistoryIndex(historyIndex + 1);
    }
  };

  const resetLayout = () => {
    localStorage.removeItem("layout");

    setLayout(defaultLayout);
    setHistory([defaultLayout]);
    setHistoryIndex(0);
    setCounter(4);
  };

  return (
    <>
      <div className="flex flex-col">
        <section className="flex items-center justify-between">
          <div>
            <button
              className="my-4 mr-4"
              onClick={undo}
              disabled={historyIndex === 0}
            >
              Undo
            </button>
            <button
              className="my-4 mr-4"
              onClick={redo}
              disabled={historyIndex === history.length - 1}
            >
              Redo
            </button>
          </div>

          <button onClick={addItem}>Add new Item</button>
        </section>

        <GridLayout
          layout={layout}
          className="layout"
          rowHeight={50}
          width={680}
          draggableHandle=".drag-handle"
          cols={18}
          isResizable={true}
          onLayoutChange={onLayoutChange}
        >
          {layout.map((item) => (
            <div className="box drag-handle" key={item.i}>
              {`Box ${item.i}`}
            </div>
          ))}
        </GridLayout>

        <button className="self-end mt-5" onClick={resetLayout}>
          Reset Layout
        </button>
      </div>
    </>
  );
};

export default Grid;
