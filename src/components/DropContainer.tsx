import { useDrop } from "react-dnd";
import { DropContainerProtocol } from "../types/types";
import { FC } from "react";

const DropContainer: FC<DropContainerProtocol> = ({ onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "box",
    drop: (item) => {
      onDrop(item);
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
        height: "300px",
        width: "300px",
        backgroundColor: isOver
          ? "lightgreen"
          : canDrop
          ? "lightyellow"
          : "white",
        padding: "10px",
      }}
    >
      Drop here
    </div>
  );
};

export default DropContainer;
