import { useState } from "react";
import DraggableBox from "./DraggableBox";
import DraggableResizeableBox from "./DraggableResizeableBox";
import DropContainer from "./DropContainer";
import { checkCollision } from "../helpers/helpers";
import { Boxes } from "../types";
import toast from "react-hot-toast";

const DragDropContainer = () => {
  const [boxes, setBoxes] = useState<Boxes>([
    {
      id: "box-1",
      position: { x: 300, y: 100 },
      size: { width: 200, height: 200 },
    },
  ]);

  const updatePosition = (
    id: string,
    newPosition: { x: number; y: number }
  ) => {
    const boxToUpdate = boxes.find((box) => box.id === id);

    if (!boxToUpdate) return;

    const updatedBox = { ...boxToUpdate, position: newPosition };

    //check for collisions against all other boxes
    const collisionDetected = boxes.some((box) => {
      if (box.id === id) return false;

      return checkCollision(
        {
          x: updatedBox.position.x,
          y: updatedBox.position.y,
          width: updatedBox.size.width,
          height: updatedBox.size.height,
        },
        {
          x: box.position.x,
          y: box.position.y,
          width: box.size.width,
          height: box.size.height,
        }
      );
    });

    if (!collisionDetected) {
      const updatedBoxes = boxes.map((box) =>
        box.id === id ? updatedBox : box
      );

      setBoxes(updatedBoxes);
    } else {
      toast.error(" Collision detected ");
    }
  };

  const updateSize = (
    id: string,
    newSize: { width: number; height: number }
  ) => {
    // check for collision before updating size
    const boxToUpdate = boxes.find((box) => box.id === id);

    if (!boxToUpdate) return;

    const updatedBox = { ...boxToUpdate, size: newSize };

    // this  function helps me detect if there's a collition, and our some returns a boolean, my checkcollision return false if there're no collision
    const collisionDetected = boxes.some((box) => {
      if (box.id === id) return false;

      return checkCollision(
        {
          x: updatedBox.position.x,
          y: updatedBox.position.y,
          width: updatedBox.size.width,
          height: updatedBox.size.height,
        },
        {
          x: box.position.x,
          y: box.position.y,
          width: box.size.width,
          height: box.size.height,
        }
      );
    });

    if (!collisionDetected) {
      const updatedBoxes = boxes.map((box) =>
        box.id === id
          ? {
              ...box,
              size: newSize,
            }
          : box
      );

      setBoxes(updatedBoxes);
    } else {
      toast.error("Collision detected during resize");
    }
  };
  return (
    <div className="flex gap-2 items-center justify-center ">
      <div className="self-start gap-y-2">
        <DraggableBox id="div for boxes" type="box" />
        <DraggableBox id=" for input" className=" flex" type="input" />
        {
          /* Draggable and Resizeable Boxes */
          boxes.map((box, _idx) => (
            <DraggableResizeableBox
              key={_idx}
              id={box.id}
              type={`resize`}
              position={box.position}
              size={box.size}
              onDragStop={updatePosition}
              onResizeStop={updateSize}
            />
          ))
        }
      </div>
      <div>
        {" "}
        <DropContainer id="1" accentType="box" />
        <DropContainer id="2" accentType="input" />
        <DropContainer id="3" accentType="resize" />
      </div>
    </div>
  );
};

export default DragDropContainer;
