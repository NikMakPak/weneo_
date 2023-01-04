import React from "react"
import Popup from "../Popup/Popup"
import ToolBar from "../ToolBar/ToolBar";
import renderBlockMarkup from "../../utils/renderBlockMarkup";

    // const [keyWords, setKeyWords] = React.useState([  //Получение ключевыйх слов ИИ
    //     "...",
    //     "...",
    //     "...",
    //     "...",
    //     "...",
    //     "...",
    // ])
    // const onClickEdit = (event) => {
    //     console.log(event)
    //     setModalPos({ posX: event.clientX, posY: event.clientY })
    //     setModalActive(true)
    // }
    // React.useEffect(() => {
    //     async function fetchData() {
    //         // You can await here
    //         await axios
    //             .post("http://127.0.0.1:5000/nlp", {
    //                 text_analize: blockStyles.p.val,
    //             })
    //             .then(function (response) {
    //                 console.log(response)
    //                 let resData = response.data.answer
    //                 setKeyWords(Object.keys(resData))
    //             })
    //             .catch(function (error) {
    //                 console.log(error)
    //             })
    //         // ...
    //     }

export default function PostBlock({ Items, setContainerItems, containerItems }) {
    console.log(Items);
    const [modalActive, setModalActive] = React.useState(false)
    const [modalPos, setModalPos] = React.useState({})
    const [toolBarActive, setToolBarActive] = React.useState(false)
    const [block, setBlock] = React.useState(Items)
    React.useEffect(() => {
        setMarkup(renderBlockMarkup(block))
    }, [block])
    const [markup, setMarkup] = React.useState(renderBlockMarkup(block))
    const onClickEdit = (event) => {
        console.log(event);
        setModalPos({ posX: event.clientX, posY: event.clientY})
        setModalActive(true)

    }
  

console.log(markup);
    return (
        <div onMouseLeave={() => setToolBarActive(false)} onMouseOver={() => setToolBarActive(true)}>
        <ToolBar
                active={toolBarActive}
                Items={block}
                containerItems={containerItems}
                setContainerItems={setContainerItems}
                blockStyles={block.elements}
            ></ToolBar>
            <Popup
                Items={Items}
                containerItems={containerItems}
                setContainerItems={setContainerItems}
                active={modalActive}
                setActive={() => setModalActive()}
                pos={modalPos}
                blockStyles={block.elements}
                setBlockStyles={(e) => setBlock(e)}
            />
        <div dangerouslySetInnerHTML={markup}  onClick={onClickEdit} style={
            block.mainStyle
        }></div>
        
        </div>
    )
}