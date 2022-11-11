import React, {useState, useRef} from 'react';
import Popup from "../../Popup/Popup";
import {Button, Div, Input} from "../../../utils/Block";
import {useDrag, useDrop} from 'react-dnd'
import {ItemTypes} from "../../SidebarBlock/ItemTypes";

const MiniBlock = ({id, text, index, moveMiniBlock}) => {
  const [kind, setKind] = useState(null) // блок, в который превратится миниблок
  const [modalActive, setModalActive] = useState(false) // вызов модального окна, в котором можно выбирать в что превратиться
  const changeModal = () => {
    setModalActive(false)
  }
  const ref = useRef(null);
  const [{handlerId}, drop] = useDrop({
    accept: ItemTypes.CARD,

    collect(monitor) {
      return {handlerId: monitor.getHandlerId()}
    },

    hover(item, monitor) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveMiniBlock(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [{isDragging}, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return {id, index}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  console.log('render')
  const changeKind = (state) => {
    let transformingBlock = null;
    if (state === 'input') {
      const input = new Input('150px', '70px', 'text')
      transformingBlock =
        <input ref={ref}
               data-handler-id={handlerId}
               style={{width: input.width, height: input.height, cursor: "grab "}} type={input.type}/>
      setKind(transformingBlock)
      // setMiniBlocks(prevState => (prevState.filter(item => {
      //   if (item.id === miniBlock.id) return item.kind = transformingBlock.type
      //   return item
      // })))
    } else if (state === 'text') {
      const div = new Div('150px', '150px', 'something text...')
      transformingBlock = <div ref={ref}
                               data-handler-id={handlerId}
                               style={{
                                 width: div.width,
                                 height: div.height,
                                 display: "flex",
                                 alignItems: 'center',
                                 justifyContent: "center",
                                 cursor: "grab "
                               }}>{div.text}</div>
      setKind(transformingBlock)
    } else if (state === 'button') {
      const button = new Button('150px', '80px', 'отправить')
      transformingBlock =
        <button ref={ref}
                data-handler-id={handlerId}
                style={{
                  width: button.width,
                  height: button.height,
                  borderRadius: "1rem",
                  cursor: "grab "
                }}>{button.text}</button>
      setKind(transformingBlock)
    }
  }

  if (kind !== null) return kind

  return (<div ref={ref} style={{
    background: '#494949',
    width: '200px',
    height: '200px',
    display: "flex",
    justifyContent: "center",
    cursor: "grab",
    alignItems: "center", opacity
  }} data-handler-id={handlerId} onClick={(e) => {
    console.log('MiniBlock', modalActive)
    setModalActive(true)
  }}>
    {text}
    <Popup active={modalActive} setActive={changeModal} kind={kind} changeKind={changeKind}/>
  </div>)
}

export default MiniBlock;