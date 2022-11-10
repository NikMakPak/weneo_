import React, {useState} from 'react';
import Popup from "../../Popup/Popup";
import {Div, Input} from "../../../utils/Block";

const MiniBlock = ({kind: initialState}) => {
  const [kind, setKind] = useState(initialState) // блок, в который превратится миниблок
  const [modalActive, setModalActive] = useState(false) // вызов модального окна, в котором можно выбирать в что превратиться

  const changeModal = () => {
    setModalActive(false)
  }

  const changeKind = (state) => {
    let transformingBlock = null;
    if (state === 'input') {
      const input = new Input('150px', '70px', 'text')
      transformingBlock = <input style={{width: input.width, height: input.height}} type={input.type}/>
      setKind(transformingBlock)
    } else if (state === 'text') {
      const input = new Div('150px', '150px', 'something wrong...')
    } else if (state === 'button') {

    }

  }

  if (kind !== null) return kind

  return (
    <div style={{
      background: '#494949',
      width: '200px',
      height: '200px',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }} onClick={(e) => {
      console.log('MiniBlock', modalActive)
      setModalActive(true)
    }}
    >
      {/*<button style={{borderRadius: '10px', padding: '10px', width: "100px"}}>Кнопка</button>*/}
      <Popup active={modalActive} setActive={changeModal} kind={kind} changeKind={changeKind}/>
    </div>
  );
};

export default MiniBlock;