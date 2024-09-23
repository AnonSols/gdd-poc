import { ResizeableBoxProtocol } from "../types";
import "react-resizable/css/styles.css";
import { ResizableBox as ResizableComponent } from "react-resizable";
import { ReactNode } from "react";
export const ResizeableBox = ({
  width,
  height,
  minConstraints = [100, 100],
  maxConstraints = [500, 500],
  onResizeStop,
  resizeHandlesPosition = ["se"],
}: ResizeableBoxProtocol & { children?: ReactNode }) => {
  return (
    <ResizableComponent
      resizeHandles={resizeHandlesPosition}
      width={width}
      height={height}
      minConstraints={minConstraints}
      maxConstraints={maxConstraints}
      onResizeStop={(_event, { size }) => onResizeStop(size.width, size.height)}
    >
      <p>Resizeable Container</p>
    </ResizableComponent>
  );
};
