import React, {useState} from 'react';
import MiniBlock from "../MiniBlock/MiniBlock";
import BlockClass from "../../../utils/Block";


const Block = () => {
  const [currentBlock, setCurrentBlock] = useState(null)
  const [miniBlocks, setMiniBlocks] = useState([{id: "1", order: 1, kind: null}, {id: "2", order: 2, kind: null}, {
    id: "3",
    order: 3,
    kind: null
  }])

  const block = new BlockClass();

  const sortBlocks = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else return -1
  }

  return (
    <div style={{
      background: '#FFF',
      width: block.width,
      height: block.height,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      border: "1px dashed lightgray"
    }}>
      {miniBlocks.sort(sortBlocks).map(miniBlock => <MiniBlock key={miniBlock.id} kind={miniBlock.kind}
                                                               miniBlock={miniBlock}
                                                               setMiniBlocks={setMiniBlocks}
                                                               setCurrentBlock={setCurrentBlock}
                                                               currentBlock={currentBlock}/>)}</div>
  );
};

export default Block;