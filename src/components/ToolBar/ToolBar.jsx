import React from "react"
import styles from "./ToolBar.module.scss"

export default function ToolBar({active, blockStyles, Items, containerItems, setContainerItems}) {
    const updateContainer = () => {
        return setContainerItems(containerItems.map(o => {
          if (o.id === Items.id) {
            return { ...Items, elements: blockStyles };
          }
          return o;
        }))
        
      }
      const deleteBlock = () => {
        return setContainerItems(containerItems.filter((o) => o.id !== Items.id))
      }
    
      function blockMoveDown() {
        let index = containerItems.indexOf(Items);
        containerItems.splice(index, 1)
        containerItems.splice(index + 1, 0, Items)
        setContainerItems(containerItems)
        updateContainer()
      }
      function blockMoveUp() {
        let index = containerItems.indexOf(Items);
        containerItems.splice(index, 1)
        containerItems.splice(index - 1, 0, Items)
        setContainerItems(containerItems)
        updateContainer()
      }

    return(
        <div style={{
            transition: "opacity 0.2s",
            opacity: active ? 1 : 0
        }} className={styles.ToolBar}>
            <div className={styles.LtoolBar}>
                <div className={styles.arrows}>
                  <img onClick={() => blockMoveUp()} src="./img/ArrToolBar.svg" alt="Up" />
                  <div className={styles.line}></div>
                  <img onClick={() => blockMoveDown()} style={{transform: "rotate(180deg)"}} src="./img/ArrToolBar.svg" alt="" />
                </div>
                <div onClick={() => deleteBlock()} className={styles.delete}>
                    <img src="./img/delete.svg" alt="Delete" />
                </div>
            </div>
            <div className={styles.EditBtn}>
                <img src="./img/pen.svg" alt="/" />
                <p>Редактировать блок</p>
            </div>
        </div>
    )
}