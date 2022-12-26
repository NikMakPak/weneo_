import React from "react"
import Popup from "../Popup/Popup"
import ToolBar from "../ToolBar/ToolBar"

export default function TextBlock({
    Items,
    setContainerItems,
    containerItems,
}) {
    console.log(Items)
    const [modalActive, setModalActive] = React.useState(false)
    const [modalPos, setModalPos] = React.useState({})
    const [blockStyles, setBlockStyles] = React.useState(Items.elements)
    const [toolBarActive, setToolBarActive] = React.useState(false)
    const onClickEdit = (event) => {
        console.log(event)
        setModalPos({ posX: event.clientX, posY: event.clientY })
        setModalActive(true)
    }

    return (
        <div
            onMouseLeave={() => setToolBarActive(false)}
            onMouseOver={() => setToolBarActive(true)}
            onClick={onClickEdit}
            style={{
                width: "100%",
                padding: "10px",
            }}
        >
            <ToolBar
                active={toolBarActive}
                Items={Items}
                containerItems={containerItems}
                setContainerItems={setContainerItems}
                blockStyles={blockStyles}
            ></ToolBar>
            <p
                style={{
                    width: "70%",
                    margin: "0 auto",
                    fontSize: blockStyles.p.fontSize,
                    color: blockStyles.p.color,
                    lineHeight: "30px",
                    textAlign: "center",
                }}
            >
                {blockStyles.p.val}
            </p>
            <Popup
                Items={Items}
                containerItems={containerItems}
                setContainerItems={setContainerItems}
                active={modalActive}
                setActive={() => setModalActive()}
                pos={modalPos}
                blockStyles={blockStyles}
                setBlockStyles={(e) => setBlockStyles(e)}
            />
        </div>
    )
}
