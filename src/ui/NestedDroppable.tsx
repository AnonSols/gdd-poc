import { useDrop } from "react-dnd";
import { NestedDroppableContainerProtocol } from "../types";
import { FC } from "react";
const NestedDroppable: FC<NestedDroppableContainerProtocol> = ({
  id = "outer",
  // accentType,
  children,
  onDrop,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: '*',
    drop: (item: { id: string }) => {
      onDrop?.(item, id as 'outer'|'inner');
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver
          ? "lightgreen"
          : canDrop
          ? "lightyellow"
          : "transparent",
      }}
      className={`overflow-y-auto font-bold rounded-lg p-10 w-[300px] h-[300px] 
        ${isOver || canDrop ? "text-black" : "text-white"}`}
    >
      {children}
    </div>
  );
};

export default NestedDroppable;
