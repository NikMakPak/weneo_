import React from 'react';

const Block = () => {
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
      <div style={{
        background: '#494949',
        width: '200px',
        height: '200px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <button>button</button>
      </div>
      <div style={{background: '#494949', width: '200px', height: '200px'}}>text</div>
      <div style={{background: '#494949', width: '200px', height: '200px'}}>input</div>
    </div>
  );
};

export default Block;