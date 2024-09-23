import { Boxes } from "../types";

//collision detect function-it return false if no overlap and true if there's an overlap. Take note ubeath!
export function checkCollision(
  rect1: { x: number; y: number; width: number; height: number },
  rect2: { x: number; y: number; width: number; height: number }
) {
  //this function will be called during both drag and drop resize event.

  return !(
    rect1.x + rect1.width < rect2.x ||
    rect1.x > rect2.x + rect2.width ||
    rect1.y + rect1.height < rect2.y ||
    rect1.y > rect2.y + rect2.height
  );
}

export const checkForCollisions = (theUpdatedBoxes: Boxes) => {
  for (let i = 0; i < theUpdatedBoxes.length; i++) {
    for (let j = i + 1; j < theUpdatedBoxes.length; j++) {
      if (
        checkCollision(
          { ...theUpdatedBoxes[i].position, ...theUpdatedBoxes[i].size },
          { ...theUpdatedBoxes[j].position, ...theUpdatedBoxes[j].size }
        )
      ) {
        return true; // means there's a collision
      } else {
        return false;
      } // means there's no collision
    }
  }
};
