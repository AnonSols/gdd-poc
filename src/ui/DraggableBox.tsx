import { useDrag } from "react-dnd";
import { DragItemProtocol } from "../types/index.ts";
import { ReactNode } from "react";

const DraggableBox = ({
  type,
  id,
}: DragItemProtocol & {
  children?: ReactNode;
  className?: string;
}) => {
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
    <div ref={drag} className={`box m-3 p-3 opacity-[${isDragging ? 0.5 : 1}]`}>
      {type == "input" ? (
        <input
          className="p-3 outine-none  text-black rounded-md"
          type="text"
          placeholder="Hello!"
        />
      ) : (
        ` DraggableBox ${id}`
      )}
    </div>
  );
};

export default DraggableBox;
