import React from "react"
import Popup from "../Popup/Popup"
import ToolBar from "../ToolBar/ToolBar"
export default function FormBlock({
    Items,
    setContainerItems,
    containerItems,
}) {
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
                padding: "10px",
                background: "#FFF",
                width: "100%",
                height: "500px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <ToolBar
                active={toolBarActive}
                Items={Items}
                containerItems={containerItems}
                setContainerItems={setContainerItems}
                blockStyles={blockStyles}
            ></ToolBar>
            <input
                placeholder={blockStyles.input1.val}
                style={{
                    width: "50%",
                    height: "60px",
                    padding: "0 20px",
                    margin: "auto",
                }}
                type="text"
            />
            <input
                placeholder={blockStyles.input2.val}
                style={{
                    width: "50%",
                    height: "60px",
                    padding: "0 20px",
                    margin: "auto",
                }}
                type="text"
            />
            <input
                placeholder={blockStyles.input3.val}
                style={{
                    width: "50%",
                    height: "60px",
                    padding: "0 20px",
                    margin: "auto",
                }}
                type="text"
            />
            <button
                style={{
                    width: "200px",
                    height: "45px",
                    borderRadius: "20px",
                    border: "none",
                    color: blockStyles.btn.color,
                    fontSize: blockStyles.btn.fontSize,
                    cursor: "pointer",
                    margin: "auto",
                    background: blockStyles.btn.bg,
                }}
            >
                {blockStyles.btn.val}
            </button>
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
