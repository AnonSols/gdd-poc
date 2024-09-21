import { useDrag } from "react-dnd";
import { DragItemProtocol } from "../types/types.ts";

const DraggableBox = ({ type, id }: DragItemProtocol) => {
  const [{ isDragging }, drag] = useDrag<
    DragItemProtocol,
    void,
    { isDragging: boolean }
  >({
    type,
    item: {
      type,
      id,
    },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  return (
    <div
      ref={drag}
      className={`bg-stone-800 p-3 rounded-sm m-3  cursor-move opacity-[${
        isDragging ? 0.5 : 1
      }]`}
    >
      DraggableBox {id}
    </div>
  );
};

export default DraggableBox;
