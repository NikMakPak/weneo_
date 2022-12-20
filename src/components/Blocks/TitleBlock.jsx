import React from "react"
import Popup from "../Popup/Popup"
import ToolBar from "../ToolBar/ToolBar";
export default function TitleBlock({ Items, setContainerItems, containerItems }) {
    console.log(Items);
    const [modalActive, setModalActive] = React.useState(false)
    const [modalPos, setModalPos] = React.useState({})
    const [blockStyles, setBlockStyles] = React.useState(Items.elements)
    const [toolBarActive, setToolBarActive] = React.useState(false)
    const onClickEdit = (event) => {
        console.log(event);
        setModalPos({ posX: event.clientX, posY: event.clientY})
        setModalActive(true)

    }
    return (
        <div onMouseLeave={() => setToolBarActive(false)} onMouseEnter={() => setToolBarActive(true)} onClick={onClickEdit} style={{
            width: "100%",
        }}>
            <ToolBar active={toolBarActive} Items={Items} containerItems={containerItems} setContainerItems={setContainerItems} blockStyles={blockStyles}></ToolBar>
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