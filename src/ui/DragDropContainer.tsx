import DraggableBox from "./DraggableBox";
import DropContainer from "./DropContainer";

const DragDropContainer = () => {
  return (
    <div>
      <DropContainer id="1" accentType="box" />
      <DropContainer id="2" accentType="input" />

      <DraggableBox id="box-1" type="box" />
      <DraggableBox id="box-2" type="input" />
    </div>
  );
};

export default DragDropContainer;
