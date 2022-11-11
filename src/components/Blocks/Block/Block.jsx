import React, {useCallback, useState} from 'react';
import MiniBlock from "../MiniBlock/MiniBlock";
import BlockClass from "../../../utils/Block";
import {Container} from "../MiniBlock/Container";
import update from "immutability-helper";
import {Card} from "../MiniBlock/Card";


const Block = () => {
  const [miniBlocks, setMiniBlocks] = useState([{id: "1", text: "first", kind: null}, {
    id: "2",
    text: "second",
    kind: null
  }, {
    id: "third", text: "3",
    kind: null
  }])

  const block = new BlockClass();

  const sortBlocks = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else return -1
  }

  const moveMiniBlock = useCallback((dragIndex, hoverIndex) => {
    setMiniBlocks((prevState) =>
      update(prevState, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevState[dragIndex]],
        ],
      }),
    )
  }, [])

  const renderMiniBlock = useCallback((block, index) => {
    return (
      <MiniBlock
        key={block.id}
        index={index}
        id={block.id}
        text={block.text}
        moveMiniBlock={moveMiniBlock}
      />
    )
  }, [])

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
      {/*{miniBlocks.sort(sortBlocks).map(miniBlock => <MiniBlock key={miniBlock.id} kind={miniBlock.kind}*/}
      {/*                                                         miniBlock={miniBlock}*/}
      {/*                                                         setMiniBlocks={setMiniBlocks}*/}
      {/*                                                         setCurrentBlock={setCurrentBlock}*/}
      {/*                                                         currentBlock={currentBlock}/>)}*/}
      {miniBlocks.map((miniBlock, i) => renderMiniBlock(miniBlock, i))}
    </div>
  );
};

export default Block;