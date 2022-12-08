import React from 'react';
import styles from './SidebarBlock.module.scss'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
// Поместить объект стилей блока сайдбара в отдельный файл
const style = {
    background: "#F2F3F5",
    minHeight: "140px",
    padding: "0px 0px 10px 0",
    boxSizing: "border-box",
    marginBottom: "10px",
    marginTop: "10px",
    transition: "$T_TIME",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px"
  }


export const SidebarBlock = function Box({title,descr, kind, prevImage, containerItems, setContainerItems, elements, ai = false}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX, //Нужно передавать тип блока, с помощью проверок в ConstructWindow Будет генериться нужный блок
        item: { title, descr, elements, kind, ai},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                setContainerItems(perv => [...perv, {id: Math.floor(Math.random() * 100),...item}])
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
            <img style={{borderRadius: "15px 15px 0 0", filter: "brightness(80%)"}} src={prevImage} alt="preview" />
            <div className={styles.content}>
                <p>{descr}</p>
                <img src="./img/arrowCross.svg" alt="<- ->" />
            </div>
        </div>
    )
}

export default SidebarBlock;