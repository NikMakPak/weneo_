import React from 'react';
import MiniBlock from "../MiniBlock/MiniBlock";

const Block = () => {
  const miniBlocks = [{id: "1"}, {id: "2"}, {id: "3"},]

  class Block {

    constructor() {
      this.width = "100%"
      this.height = "250px"
    }


  }

  class Button extends Block {
    constructor(props) {
      super(props);

    }

  }

  const block = new Block();

 
  return (
    <div style={{
      background: '#9c9c9c',
      width: block.width,
      height: block.height,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }}>
      {miniBlocks.map(miniBlock => <MiniBlock key={miniBlock.id}/>)}
    </div>
  );
};

export default Block;