import React from "react"
import Popup from "../Popup/Popup"
import axios from "axios";
import ToolBar from "../ToolBar/ToolBar";

export default function PostBlock({ Items, setContainerItems, containerItems }) {
    console.log(Items);
    const [modalActive, setModalActive] = React.useState(false)
    const [modalPos, setModalPos] = React.useState({})
    const [blockStyles, setBlockStyles] = React.useState(Items.elements)
    const [toolBarActive, setToolBarActive] = React.useState(false)
    const [keyWords, setKeyWords] = React.useState(["...","...","...","...","...","..."])
    const onClickEdit = (event) => {
        console.log(event);
        setModalPos({ posX: event.clientX, posY: event.clientY})
        setModalActive(true)

    }
    React.useEffect(() => {
        async function fetchData() {
            // You can await here
            await axios.post('http://127.0.0.1:5000/nlp', {
                text_analize: blockStyles.p.val,
            })
                .then(function (response) {
                    console.log(response);
                    let resData = response.data.answer
                    setKeyWords( Object.keys(resData))
                    
                })
                .catch(function (error) {
                    console.log(error);
                })
            // ...
        }

        fetchData()
        


    }, [Items])

    console.log(keyWords);
    return (
        <div onMouseLeave={() => setToolBarActive(false)} onMouseEnter={() => setToolBarActive(true)} onClick={onClickEdit} style={{
            width: "100%",
            padding: "10px"
        }}>
            <ToolBar active={toolBarActive} Items={Items} containerItems={containerItems} setContainerItems={setContainerItems} blockStyles={blockStyles}></ToolBar>
            <div style={{margin: "0 auto",width: "50%"}}>
                <h3>{blockStyles.title.val}</h3>
                <p style={{fontSize: "20px", lineHeight: "25px"}}>
                    {blockStyles.p.val}
                </p>
            <ul style={{listStyle: "none" ,display: "flex", flexWrap: "wrap",}}>
                {
                    keyWords.slice(0, 6).map((obj) => {
                        return (
                            <li style={{marginRight: "20px", border: "1px solid gray", borderRadius: "15px", padding: "5px 5px", marginBottom: "5px"}}>{obj}</li>
                        )
                    })
                }
                
            </ul>
            </div>
            <Popup Items={Items} containerItems={containerItems} setContainerItems={setContainerItems} active={modalActive} setActive={() => setModalActive()} pos={modalPos} blockStyles={blockStyles} setBlockStyles={(e) => setBlockStyles(e)} />
        </div>
    )
}