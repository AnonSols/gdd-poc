import { ReactNode } from "react";

export interface DragItemProtocol {
  type: string;
  id: string;
}

export interface DraggableResizeableProtocol extends DragItemProtocol {
  position: { x: number; y: number };
  size: { width: number; height: number };
  onDragStop: (id: string, newPosition: { x: number; y: number }) => void;
  onResizeStop: (
    id: string,
    newSize: { width: number; height: number }
  ) => void;
}

export interface DropContainerProtocol {
  id: string;
  accentType: string;
}
export interface NestedDroppableContainerProtocol {
  children: ReactNode;
  id: string; 
  onDrop: (item: { id: string }, containerId: "outer" | "inner") => void;
  accentType?: string;
}

export interface ResizeableBoxProtocol {
  width: number;
  height: number;
  minConstraints?: [number, number];
  maxConstraints?: [number, number];
  // se refers to south east - bottom-right corner
  resizeHandlesPosition?: ["se"] | ["n"] | ["w"] | ["nw"] | ["ne"];
  onResizeStop: (newWidth: number, newHeight: number) => void;
}

export type Boxes = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  parent?: "outer" | "inner";
}[];
