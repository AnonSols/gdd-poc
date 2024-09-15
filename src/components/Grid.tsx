import { useEffect, useState } from "react";
import ReactGridLayout from "react-grid-layout";
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

  useEffect(() => {
    const savedLayout = localStorage.getItem("layout");
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
  }, []);

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

  const [sourceLayout, setSourceLayout] = useState<LayoutItem[]>([
    { i: "1", x: 0, y: 0, w: 2, h: 2 },
    { i: "2", x: 2, y: 0, w: 2, h: 2 },
  ]);

  const [targetLayout, setTargetLayout] = useState<LayoutItem[]>([]); // Initially empty

  const [draggedItem, setDraggedItem] = useState<LayoutItem | null>(null);

  const onSourceDragStart = (layout: LayoutItem[], oldItem: LayoutItem) => {
    setDraggedItem(oldItem);
  };

  return (
    <>
      <div>
        <button onClick={undo} disabled={historyIndex === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={historyIndex === history.length - 1}>
          Redo
        </button>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={90}
          width={1200}
          draggableHandle=".drag-handle"
          isResizable={true}
          onLayoutChange={(newLayout) => onLayoutChange(newLayout)}
        >
          {layout &&
            layout.map((item) => (
              <div
                key={item.i}
                className="box drag-handle"
              >{`Box ${item.i}`}</div>
            ))}
        </GridLayout>
      </div>

      <section className="flex justify-between gap-4 my-4">
        {/* Source Grid */}
        <div className="w-[50%] layout">
          <div className="flex justify-between">
            <h3>Source Grid</h3>
            <button>Add item</button>
          </div>
          <ReactGridLayout
            layout={sourceLayout}
            className=""
            onLayoutChange={(newLayout) => setSourceLayout(newLayout)}
            cols={6}
            rowHeight={30}
            width={600}
          >
            {sourceLayout.map((item) => (
              <div key={item.i} className="box" data-grid={item}>
                Item {item.i}
              </div>
            ))}
          </ReactGridLayout>
        </div>

        {/* Target Grid */}
        <section className="w-[50%] layout">
          <h3>Target Grid</h3>
          <ReactGridLayout
            layout={targetLayout}
            className="drag-handle"
            onLayoutChange={(newLayout) => setTargetLayout(newLayout)}
            cols={6}
            rowHeight={30}
            width={600}
          >
            {targetLayout.map((item) => (
              <div key={item.i} className="box drag-handle" data-grid={item}>
                Item {item.i}
              </div>
            ))}
          </ReactGridLayout>
        </section>
      </section>
    </>
  );
};

export default Grid;
