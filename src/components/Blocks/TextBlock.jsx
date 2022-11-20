import React from "react"
import Popup from "../Popup/Popup"


export default function TextBlock({ Items, setContainerItems, containerItems }) {
    console.log(Items);
    const [modalActive, setModalActive] = React.useState(false)
    const [modalPos, setModalPos] = React.useState({})
    const [blockStyles, setBlockStyles] = React.useState(Items.elements)
    const onClickEdit = (event) => {
        console.log(event);
        setModalPos({ posX: event.clientX, posY: event.clientY})
        setModalActive(true)

    }



    return (
        <div onClick={onClickEdit} style={{
            width: "100%",
            padding: "10px"
        }}>
            <p style={{ 
                width: "70%",
                margin: "0 auto",
                fontSize: blockStyles.p.fontSize,
                color: blockStyles.p.color,
                lineHeight: "30px",
                textAlign: "center"
                
            }}>
               {blockStyles.p.val}
            </p>
            <Popup Items={Items} containerItems={containerItems} setContainerItems={setContainerItems} active={modalActive} setActive={() => setModalActive()} pos={modalPos} blockStyles={blockStyles} setBlockStyles={(e) => setBlockStyles(e)} />
        </div>
    )
}