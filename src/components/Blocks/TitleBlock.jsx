import React from "react"
import Popup from "../Popup/Popup"

export default function TitleBlock({ Items, setContainerItems, containerItems }) {
    console.log(Items);
    const [modalActive, setModalActive] = React.useState(false)
    const [modalPos, setModalPos] = React.useState({})
    const [blockStyles, setBlockStyles] = React.useState(Items.elements)
    const onClickEdit = (event) => {
        console.log(event);
        setModalPos({ posX: event.pageX, posY: event.pageY })
        setModalActive(true)

    }
    return (
        <div onClick={onClickEdit} style={{
            width: "100%",
        }}>
            <h1 style={{ 
                fontSize: blockStyles.h1.fontSize,
                color: blockStyles.h1.color,
                textAlign: "center",
                margin: "10px"
                
            }}>
               {blockStyles.h1.val}
            </h1>
            <Popup Items={Items} containerItems={containerItems} setContainerItems={setContainerItems} active={modalActive} setActive={() => setModalActive()} pos={modalPos} blockStyles={blockStyles} setBlockStyles={(e) => setBlockStyles(e)} />
        </div>
    )
}