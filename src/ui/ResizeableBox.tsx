import { ResizeableBoxProtocol } from "../types/types";
import "react-resizable/css/styles.css";
import { ResizableBox as ResizableComponent } from "react-resizable";
export const ResizeableBox = ({
  width,
  height,
  minConstraints,
  maxConstraints,
  onResizeStop,
}: ResizeableBoxProtocol) => {
  return (
    <ResizableComponent
      width={width}
      height={height}
      minConstraints={minConstraints}
      maxConstraints={maxConstraints}
      onResizeStop={(_event, { size }) => onResizeStop(size.width, size.height)}
    >
      ResizableComponent
    </ResizableComponent>
  );
};
