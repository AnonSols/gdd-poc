/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useState } from "react";
import { useDrag } from "react-dnd";
import { DraggableResizeableProtocol } from "../types";
import { ResizeableBox } from "./ResizeableBox";

const DraggableResizeableBox: FC<DraggableResizeableProtocol> = ({
  id,
  type,
  position,
  size,
  onDragStop,
  onResizeStop,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { id, type },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  const [currentPosition, setCurrentPosition] = useState(position);
  const [currentSize, setCurrentSize] = useState(size);

  const handleDragStop = (newPosition: { x: number; y: number }) => {
    setCurrentPosition(newPosition);
    onDragStop(id, newPosition);
  };
  handleDragStop;
  const handleResizeStop = (newWidth: number, newHeight: number): void => {
    setCurrentSize({ width: newWidth, height: newHeight });
    onResizeStop(id, { width: newWidth, height: newHeight });
  };

  return (
    <div
      className={`box top-[${currentPosition.y}] left-[${
        currentPosition.x
      }] cursor-move opacity-[${isDragging ? 0.5 : 1}]`}
      ref={drag}
    >
      <ResizeableBox
        width={currentSize.width}
        height={currentSize.height}
        onResizeStop={(newWidth, newHeight) =>
          handleResizeStop(newWidth, newHeight)
        }
      >
        This is {id}, the resizeable block
      </ResizeableBox>
    </div>
  );
};

export default DraggableResizeableBox;

/* Collision prevention approach
tracking the position and sizes(W x H) of each component
Checking if any components bounding boxes overlap during drag or resize events.

*/
