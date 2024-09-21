import { useDrop } from "react-dnd";
import { DropContainerProtocol } from "../types/types";
import { FC, useState } from "react";
import DraggableBox from "./DraggableBox";

const DropContainer: FC<DropContainerProtocol> = ({ id, accentType }) => {
  const [items, setItems] = useState<string[]>([]);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: accentType,
    drop: (item: { id: string }) => {
      setItems((prevItems) => [...prevItems, item.id]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={drop}
      className={`p-10 w-[300px] h-[300px] bg-[${
        isOver ? "lightgreen" : canDrop ? "lightyellow" : "white"
      }]`}
    
    >
      <p>{`MY DROP ZONE ${id}`}</p>

      {items.map((item) => (
        <DraggableBox key={item} id={item} type={accentType} />
      ))}
    </div>
  );
};

export default DropContainer;
