import React from "react"
import Popup from "../Popup/Popup"
export default function FormBlock({Items, setContainerItems, containerItems}) {
    const [modalActive, setModalActive] = React.useState(false)
    const [modalPos, setModalPos] = React.useState({})
    const [blockStyles, setBlockStyles] = React.useState(Items.elements)
    const onClickEdit = (event) => {
        console.log(event);
        setModalPos({ posX: event.pageX, posY: event.pageY })
        setModalActive(true)
    }
    return(
        <div onClick={onClickEdit} style={{
            padding: "50px",
            background: '#FFF',
            width: "100%",
            height: "500px",
            display: 'flex',
            flexDirection: "column",
            
          }}>
            <input placeholder={blockStyles.input1.val} style={{
                width: "50%",
                height: "60px",
                padding: "0 20px",
                margin: "auto"
            }} type="text" />
             <input placeholder={blockStyles.input2.val} style={{
                width: "50%",
                height: "60px",
                padding: "0 20px",
                margin: "auto"
            }} type="text" />
             <input placeholder={blockStyles.input3.val} style={{
                width: "50%",
                height: "60px",
                padding: "0 20px",
                margin: "auto"
            }} type="text" />
            <button style={{
                width: "200px",
                height: "45px",
                borderRadius: "20px",
                border: "none",
                color: blockStyles.btn.color,
                fontSize: blockStyles.btn.fontSize,
                cursor: "pointer",
                margin: "auto",
                background: blockStyles.btn.bg
            }}>{blockStyles.btn.val}</button>
            <Popup Items={Items} containerItems={containerItems} setContainerItems={setContainerItems} active={modalActive} setActive={() => setModalActive()} pos={modalPos} blockStyles={blockStyles} setBlockStyles={(e) => setBlockStyles(e)} />
        </div>
    )
}