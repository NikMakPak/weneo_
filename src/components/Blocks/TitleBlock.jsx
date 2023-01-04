import React from "react"
import Popup from "../Popup/Popup"
import ToolBar from "../ToolBar/ToolBar";
import renderBlockMarkup from "../../utils/renderBlockMarkup";

export default function TitleBlock({ Items, setContainerItems, containerItems }) {
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