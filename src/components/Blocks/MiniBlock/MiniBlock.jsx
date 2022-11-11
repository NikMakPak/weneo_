import React, {useState} from 'react';
import Popup from "../../Popup/Popup";
import {Button, Div, Input} from "../../../utils/Block";

const MiniBlock = ({kind: initialState, miniBlock, setMiniBlocks, setCurrentBlock, currentBlock}) => {
  const [kind, setKind] = useState(initialState) // блок, в который превратится миниблок
  const [modalActive, setModalActive] = useState(false) // вызов модального окна, в котором можно выбирать в что превратиться
  const [active, setActive] = useState("1px dashed gray")
  const changeModal = () => {
    setModalActive(false)
  }

  function dragStartHandler(e, block) {
    console.log('drag', block)
    setCurrentBlock(block)
  }

  function dragEndHandler(e) {
    e.target.style.background = "transparent"
  }

  function dragOverHandler(e) {
    e.preventDefault()
    e.target.style.background = 'white'
  }

  function dropHandler(e, block) {
    e.preventDefault()
    console.log(block)
    setMiniBlocks(prevState => prevState.map(item => {
      if (item.id === block.id) {
        return {...item, order: currentBlock?.order}
      }
      if (item.id === currentBlock?.id) {
        return {...item, order: block.id}
      }
      return item
    }))
  }

  const changeKind = (state) => {
    let transformingBlock = null;
    if (state === 'input') {
      const input = new Input('150px', '70px', 'text')
      transformingBlock =
        <input draggable={true} onDragStart={(e) => dragStartHandler(e, miniBlock)}
               onDragLeave={(e) => dragEndHandler(e)}
               onDragEnd={(e) => dragEndHandler(e)} onDragOver={(e) => dragOverHandler(e)}
               onDrop={(e) => dropHandler(e, miniBlock)}
               style={{width: input.width, height: input.height, cursor: "grab "}} type={input.type}/>
      setKind(transformingBlock)
      setMiniBlocks(prevState => (prevState.filter(item => {
        if (item.id === miniBlock.id) return item.kind = transformingBlock.type
        return item
      })))
    } else if (state === 'text') {
      const div = new Div('150px', '150px', 'something text...')
      transformingBlock = <div draggable={true} onDragStart={(e) => dragStartHandler(e, miniBlock)}
                               onDragLeave={(e) => dragEndHandler(e)}
                               onDragEnd={(e) => dragEndHandler(e)} onDragOver={(e) => dragOverHandler(e)}
                               onDrop={(e) => dropHandler(e, miniBlock)} style={{
        width: div.width,
        height: div.height,
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        cursor: "grab "
      }}>{div.text}</div>
      setKind(transformingBlock)
      setMiniBlocks(prevState => (prevState.filter(item => {
        if (item.id === miniBlock.id) return item.kind = transformingBlock.type
        return item
      })))
    } else if (state === 'button') {
      const button = new Button('150px', '40px', 'Отправить')
      transformingBlock =
        <button draggable={true} onDragStart={(e) => dragStartHandler(e, miniBlock)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)} onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, miniBlock)} style={{
          width: button.width,
          height: button.height,
          borderRadius: "1rem",
          cursor: "grab "
        }}>{button.text}</button>
      setKind(transformingBlock)
      setMiniBlocks(prevState => (prevState.filter(item => {
        if (item.id === miniBlock.id) return item.kind = transformingBlock.type
        return item
      })))
    }

  }

  if (kind !== null) return kind

  return (
    <div style={{
      background: '#FFF',
      border: active,
      width: '200px',
      height: '200px',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }} onClick={(e) => {
      console.log('MiniBlock', modalActive)
      setModalActive(true)
    }} onMouseOver={(e) => {
      setActive("1px solid blue")
    }} onMouseLeave={(e) => {
      setActive("1px dashed gray")
    }}
    >
      <Popup active={modalActive} setActive={changeModal} kind={kind} changeKind={changeKind}/>
    </div>
  );
};

export default MiniBlock;