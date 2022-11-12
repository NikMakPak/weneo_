import React, {useCallback, useState} from 'react';
import MiniBlock from "../MiniBlock/MiniBlock";
import BlockClass from "../../../utils/Block";
import update from "immutability-helper";


const Block = ({col, childs}) => {
  const [miniBlocks, setMiniBlocks] = useState(col.map((obj) => { return {id: obj, order: obj, kind: obj.kind}}))
  const block = new BlockClass();
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
  console.log(miniBlocks)
  const renderMiniBlock = useCallback((block, index) => {
    return (
      <MiniBlock
        key={block.id}
        index={index}
        id={block.id}
        text={block.text}
        moveMiniBlock={moveMiniBlock}
        setMiniBlocks={setMiniBlocks}
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
      {miniBlocks.map((miniBlock, i) => renderMiniBlock(miniBlock, i))}
    </div>
  );
};

export default Block;