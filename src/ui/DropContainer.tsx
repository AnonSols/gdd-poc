import { useDrop } from "react-dnd";
import { DropContainerProtocol } from "../types";
import { FC, useState } from "react";
import DraggableBox from "./DraggableBox";
import toast from "react-hot-toast";

const DropContainer: FC<DropContainerProtocol> = ({ id, accentType }) => {
  const [items, setItems] = useState<string[]>([]);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: accentType,
    drop: (item: { id: string }) => {
      // const offset = monitor.getClientOffset();
      // const newItem = {
      //   id: item.id,
      //   x: offset?.x || 0,
      //   y: offset?.y || 0,
      //   width: 100,
      //   height: 100,
      // };

      setItems((prevItems) => [...prevItems, item.id]);
      toast.success(`${accentType} has been placed in it's container`);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={drop}
      className={`overflow-y-auto font-bold rounded-lg p-10 w-[300px] h-[300px] bg-[${
        isOver ? "lightgreen" : canDrop ? "lightyellow" : "transparent"
      }]  ${isOver ? "text-black " : canDrop ? "text-black" : "text-white"}`}
    >
      <p>{`MY DROP ZONE ${id} for ${accentType}`}</p>

      {items.map((item, _idx) => (
        <DraggableBox key={_idx} id={item} type={accentType} />
      ))}
    </div>
  );
};

export default DropContainer;
