import { useDrag } from "react-dnd";
import {DragItemProtocol} from '../types/types.ts';


const DraggableBox = () => {
  const [{isDragging}, drag] = useDrag<DragItemProtocol,void,{isDragging:boolean}>(
    {
    type:'box',
    item:{
      type:'box', id:'box-1' },
      collect:(monitor) => ({isDragging: !!monitor.isDragging()})
    }
  }
  );

  return <div ref={drag} className={`bg-[lightblue] w-11 h-1 cursor-move opacity-[${isDragging ? 0.5 : 1}]`}>DraggableBox</div>;
};

export default DraggableBox;
