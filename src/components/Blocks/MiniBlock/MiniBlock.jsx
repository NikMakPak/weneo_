import React, {useState} from 'react';
import Popup from "../../Popup/Popup";

const MiniBlock = () => {
  const [modalActive, setModalActive] = useState(false)

  const changeModal = () => {
    console.log('work')
    setModalActive(false)
  }


  return (
    <div style={{
      background: '#494949',
      width: '200px',
      height: '200px',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }} onClick={() => setModalActive(true)}>
      {/*<button style={{borderRadius: '10px', padding: '10px', width: "100px"}}>Кнопка</button>*/}
      <Popup active={modalActive} setActive={changeModal}/>
    </div>
  );
};

export default MiniBlock;