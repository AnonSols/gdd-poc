import { useState } from "react";
import DraggableBox from "./DraggableBox";
import DraggableResizeableBox from "./DraggableResizeableBox";
import DropContainer from "./DropContainer";
import { checkCollision } from "../helpers/helpers";
import { Boxes } from "../types";
import toast from "react-hot-toast";
// import NestedDroppable from "./NestedDroppable";

const DragDropContainer = () => {
  const [boxes, setBoxes] = useState<Boxes>([
    {
      id: "box-1",
      position: { x: 50, y: 50 },
      size: { width: 200, height: 200 },
    },
    // {
    //   id: "Nestable-resizeable-draggable",
    //   position: { x: 300, y: 100 },
    //   size: { width: 200, height: 200 },
    //   parent:'outer'
    // },
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

  //   function handleDrop (item:{id:string}, containerId:"outer"|"inner"){
  //     const updatedBoxes = boxes.map(box=> box.id === item.id ? {...box, parent:containerId}:box);

  // setBoxes(updatedBoxes);
  //   }

  return (
    <div className="flex gap-3 items-center justify-center ">
      <div className=" gap-5  lg:flex lg:flex-col items-center justify-around ">
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
      <br className="lg:hidden" />
      <div className="block">
        {" "}
        <div className="inline-block">
          <DropContainer id="1" accentType="box" />
          <DropContainer id="2" accentType="input" />
          <DropContainer id="3" accentType="resize" />
        </div>
        {/* // This is for Nestable Droppings
        //Experimental */}
        {/* <NestedDroppable id="outer" accentType="box" onDrop={handleDrop}>
          {boxes
            .filter((box) => box.parent === "outer")
            .map((box, idx) => (
              <>
                <DraggableResizeableBox
                  key={idx}
                  type="resize"
                  id={box.id}
                  position={box.position}
                  size={box.size}
                  onDragStop={() => {}}
                  onResizeStop={() => {}}
                />
              </>
            ))}

          <NestedDroppable onDrop={handleDrop} id="inner" accentType="box">
            {boxes
              .filter((box) => box.parent === "inner")
              .map((box, idx) => (
                <DraggableResizeableBox
                  key={idx}
                  type="resize"
                  id={box.id}
                  position={box.position}
                  size={box.size}
                  onDragStop={() => {}}  
                  onResizeStop={() => {}}  
                />
              ))}
          </NestedDroppable>
        </NestedDroppable> */}
      </div>
    </div>
  );
};

export default DragDropContainer;
