import React from "react"
import Popup from "../../Popup/Popup";

export default function NavBar({ Items, setContainerItems, containerItems }) {
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
           
        }}>
            <div style={{
            padding: "20px",
            background: '#FFF',
            width: "100%",
            height: "50px",
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center"
        }}>
                <img width={30} height={30} src="./img/construct.svg" alt="" />
                <ul style={{
                    display: "flex",
                    listStyle: "none",
                 
                }}>
                    <li style={{
                        cursor: "pointer",
                        marginRight: "20px"
                    }}>{blockStyles.li1.val}</li>
                    <li style={{
                        cursor: "pointer",
                        marginRight: "20px"
                    }}>{blockStyles.li2.val}</li>
                    <li style={{
                        cursor: "pointer",
                    }}>{blockStyles.li3.val}</li>
                </ul>
            </div>

            <Popup Items={Items} containerItems={containerItems} setContainerItems={setContainerItems} active={modalActive} setActive={() => setModalActive()} pos={modalPos} blockStyles={blockStyles} setBlockStyles={(e) => setBlockStyles(e)} />
        </div>
    )
}