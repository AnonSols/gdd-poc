import { useDrag } from "react-dnd";
import { DragItemProtocol } from "../types/index.ts";
import { ReactNode } from "react";
import { useNameContext } from "../hooks/useNameContext.ts";

const DraggableBox = ({
  type,
  id,
}: DragItemProtocol & {
  children?: ReactNode;
  className?: string;
}) => {
  const { userName, setUserName } = useNameContext();
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
    <div ref={drag} className={`box m-5 p-3 flex flex-wrap opacity-[${isDragging ? 0.5 : 1}]`}>
      {type == "input" ? (
        <input
          className="relative p-3 outine-none  text-black rounded-md"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onBlur={(e) => setUserName(e.target.value)}
          placeholder="Hello!"
        />
      ) : (
        ` DraggableBox ${id}`
      )}
    </div>
  );
};

export default DraggableBox;
