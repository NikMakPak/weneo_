import React, {useState, useRef, useEffect} from 'react';
import Popup from "../../Popup/Popup";
import {Button, Div, Input} from "../../../utils/Block";
import {useDrag, useDrop} from 'react-dnd'
import {ItemTypes} from "../../SidebarBlock/ItemTypes";

const MiniBlock = ({id, text, index, moveMiniBlock, setMiniBlocks,children}) => {
  const [kind, setKind] = useState(null) // вид блока, в который превратится миниблок
  const [modalActive, setModalActive] = useState(false) // вызов модального окна, в котором можно выбирать во что превратиться

  const offModal = () => {
    setModalActive(false)
  }

  if (kind !== null) return kind

  return (<div style={{
    padding: "50px",
    background: '#FFF',
    border: "1px dashed lightgray",
    width: '30%',
    height: '90%',
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    alignItems: "center",
  }} onClick={(e) => {
    setModalActive(true)
  }}>
    {children}
    <Popup active={modalActive} setActive={offModal} kind={kind} />
  </div>)
}

export default MiniBlock;