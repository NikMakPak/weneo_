import React from 'react';
import styles from './SidebarBlock.module.scss'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
// Поместить объект стилей блока сайдбара в отдельный файл
const style = {
    minHeight: "79px",
    boxShadow: "0px 4px 10px #C2D6DA",
    padding: "10px 5px 10px 0",
    boxSizing: "border-box",
    marginBottom: "10px",
    transition: "$T_TIME",
  }
export const SidebarBlock = function Box({title,descr, setContainerItems}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX, //Нужно передавать тип блока, с помощью проверок в ConstructWindow Будет генериться нужный блок
        item: { title, descr },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                setContainerItems(perv => [...perv, item])
              console.log(item);
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
            <img src='./img/grid_view.svg' alt="icon" />
            <div className={styles.content}>
                <h4>{title}</h4>
                <p>{descr}</p>
            </div>
        </div>
    )
}

export default SidebarBlock;