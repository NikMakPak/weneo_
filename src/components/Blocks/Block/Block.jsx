import React from 'react';
import MiniBlock from "../MiniBlock/MiniBlock";
import BlockClass from "../../../utils/Block";


const Block = () => {
  const miniBlocks = [{id: "1", kind: null}, {id: "2", kind: null}, {id: "3", kind: null},]


  const block = new BlockClass();


  return (
    <div style={{
      background: '#9c9c9c',
      width: block.width,
      height: block.height,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }}>
      {miniBlocks.map(miniBlock => <MiniBlock key={miniBlock.id} kind={miniBlock.kind}/>)}
    </div>
  );
};

export default Block;