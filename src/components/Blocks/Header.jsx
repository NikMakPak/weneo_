import React from "react"
import Popup from "../Popup/Popup"
export default function Header({ Items, setContainerItems, containerItems }) {
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
            padding: "50px",
            width: "100%",
            height: "100vh",
            display: 'flex',
            background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./img/header-img.jpg') center",
            backgroundSize: "cover",
            flexDirection: "column",
            backgroundPosition: "center"
        }}>
            <div style={{
                margin: "auto",
                textAlign: "center",
                width: "70%",
                color: "#FFF",
            }}>
                <h1 style={{ fontSize: blockStyles.h1.fontSize, color: blockStyles.h1.color }}>{blockStyles.h1.val}</h1>
                <h4 style={{ marginBottom: "50px", fontSize: blockStyles.h4.fontSize, color: blockStyles.h4.color }}>{blockStyles.h4.val}</h4>
                <button style={{
                    fontSize: blockStyles.btn.fontSize,
                    width: "200px",
                    height: "45px",
                    borderRadius: "20px",
                    border: "none",
                    color: blockStyles.btn.color,
                    cursor: "pointer",
                    margin: "0 auto",
                    background: blockStyles.btn.bg
                }}>{blockStyles.btn.val}</button>
            </div>
            <Popup Items={Items} containerItems={containerItems} setContainerItems={setContainerItems} active={modalActive} setActive={() => setModalActive()} pos={modalPos} blockStyles={blockStyles} setBlockStyles={(e) => setBlockStyles(e)} />
        </div>
    )
}