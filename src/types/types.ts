export interface DragItemProtocol {
  type: string;
  id: string;
}

export interface DropContainerProtocol {
  onDrop: (item: unknown) => void;
}
