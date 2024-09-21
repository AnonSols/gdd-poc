export interface DragItemProtocol {
  type: string;
  id: string;
}

export interface DropContainerProtocol {
  id: string;
  accentType: string;
}

export interface ResizeableBoxProtocol {
  width: number;
  height: number;
  minConstraints: [number, number];
  maxConstraints: [number, number];
  onResizeStop: (newWidth: number, newHeight: number) => void;
}
