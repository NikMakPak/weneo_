import React from "react"
import styles from './Constructor.module.scss';
import SidebarBlock from "../../components/SidebarBlock/SidebarBlock";
import Block from "../../components/Blocks/Block/Block";
import { useDrop, DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ItemTypes } from "../../components/SidebarBlock/ItemTypes";

export default function Constructor() {
    const arOptions = ['Шаблоноблоки', 'Нейроноблоки', 'Позициоблоки'];
    const [value, setValue] = React.useState("");
    const [rotateWidg, setRotateWidg] = React.useState(0);

    const options = arOptions.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });

    const [containerItems, setContainerItems] = React.useState([])

    // Поместить объект стилей в отдельный файл
    const style = {
        overflow: "auto",
        marginTop: "20px",
        marginLeft: "5%",
        width: "75%",
        height: "90vh",
        background: "#FFF",
        boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.25)",
        transition: "0.3s"
    }
//Мб вынести в отдельный модуль
    const ConstuctWindow = () => {
        const [{ canDrop, isOver }, drop] = useDrop(() => ({
            accept: ItemTypes.BOX,
            drop: () => ({ name: 'Dustbin' }),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }))
        const isActive = canDrop && isOver
        let backgroundColor = '#FFF'
        if (isActive) {
            // backgroundColor = 'gray'
        } else if (canDrop) {
            backgroundColor = 'rgba(200,200,200, 0.1)'
        }
        return (
            <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
                {/* {isActive ? 'Release to drop' : 'Drag a box here'} */}
                {
                    containerItems.length ? containerItems.map((e) => <Block />) :
                        <h3 style={{ textAlign: "center", marginTop: "20%" }}>Перетащите сюда блок</h3>
                }
            </div>
        )
    }


    return (<>

        <div className={styles.headerBar}>
            <div className={styles.headLBar}>
                <img width={36} height={36} src="./img/construct.svg" alt="" />
                <h3>Название нового сайта</h3>
            </div>
            <div className={styles.headRBar}>
                <img src="./img/undo.svg" alt="" />
                <img style={{ transform: "rotateY(180deg)" }} src="./img/undo.svg" alt="" />
                <img src="./img/preview.svg" alt="" />
                <img src="./img/person_min.svg" alt="" />
                <img src="./img/settings.svg" alt="" />
                <div className={styles.barSelector}>
                    <ul>
                        <li>Контент</li>
                        <li>Страницы</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.construct}>
            <DndProvider backend={HTML5Backend}>


                <ConstuctWindow />


                <div className={styles.sideBar}>
                    <img style={{ transform: `rotate(${rotateWidg}deg)` }} src="./img/widgets.svg" alt="" />
                    <select value={value} onChange={(event) => { setValue(event.target.value); setRotateWidg(prev => prev + 90) }}>
                        {options}
                    </select>
                    <div className={styles.sideBarContent}>
                    {/* Сделать объекты для генерации блоков селектора*/}
                        {value === "2" ?
                            <>
                                <SidebarBlock setContainerItems={setContainerItems} title={"Позициоблок 1"} descr={"описание что делает блок, с текстом и описанием"} />
                                <SidebarBlock setContainerItems={setContainerItems} title={"Позициоблок 2"} descr={"описание что делает блок, с текстом и описанием"} />
                                <SidebarBlock setContainerItems={setContainerItems} title={"Позициоблок 3"} descr={"описание что делает блок, с текстом и описанием"} />
                                <SidebarBlock setContainerItems={setContainerItems} title={"Позициоблок 4"} descr={"описание что делает блок, с текстом и описанием"} />
                            </>
                            : value === "1" ?
                                <>
                                    <SidebarBlock setContainerItems={setContainerItems} title={"Нейроноблок 1"} descr={"описание что делает блок, с текстом и описанием"} />
                                    <SidebarBlock setContainerItems={setContainerItems} title={"Нейроноблок 2"} descr={"описание что делает блок, с текстом и описанием"} />
                                    <SidebarBlock setContainerItems={setContainerItems} title={"Нейроноблок 3"} descr={"описание что делает блок, с текстом и описанием"} />
                                    <SidebarBlock setContainerItems={setContainerItems} title={"Нейроноблок 4"} descr={"описание что делает блок, с текстом и описанием"} />
                                </>
                                :
                                <>
                                    <SidebarBlock setContainerItems={setContainerItems} title={"Шаблоноблок 1"} descr={"описание что делает блок, с текстом и описанием"} />
                                    <SidebarBlock setContainerItems={setContainerItems} title={"Шаблоноблок 2"} descr={"описание что делает блок, с текстом и описанием"} />
                                    <SidebarBlock setContainerItems={setContainerItems} title={"Шаблоноблок 3"} descr={"описание что делает блок, с текстом и описанием"} />
                                    <SidebarBlock setContainerItems={setContainerItems} title={"Шаблоноблок 4"} descr={"описание что делает блок, с текстом и описанием"} />
                                </>

                        }
                    </div>
                </div>
            </DndProvider>
        </div>
    </>
    )
}