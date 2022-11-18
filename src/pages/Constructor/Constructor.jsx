import React from "react"
import styles from './Constructor.module.scss';
import SidebarBlock from "../../components/SidebarBlock/SidebarBlock";
// import Block from "../../components/Blocks/Block/Block";
// import MiniBlock from "../../components/Blocks/MiniBlock/MiniBlock";
import TextBlock from "../../components/Blocks/TextBlock";
import FormBlock from "../../components/Blocks/FormBlock";
import { useDrop, DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ItemTypes } from "../../components/SidebarBlock/ItemTypes";
import NavBar from "../../components/Blocks/Block/NavBar";
import Header from "../../components/Blocks/Header";
import TitleBlock from "../../components/Blocks/TitleBlock";

export default function Constructor() {
    const [value, setValue] = React.useState([]);

    const [containerItems, setContainerItems] = React.useState([]) // Глобавльный стейт элементов

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
        console.log(containerItems);
        return (
            <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
                {/* {isActive ? 'Release to drop' : 'Drag a box here'} */}
                {
                    containerItems.length ? containerItems.map((e) =>
                        e.kind === "form" ? <FormBlock /> :
                            e.kind === "nav" ? <NavBar /> :
                                e.kind === "header" ? <Header containerItems={containerItems} setContainerItems={(obj)=> setContainerItems(obj)} Items={e}/> :
                                    e.kind === "title" ? <TitleBlock containerItems={containerItems} setContainerItems={(obj)=> setContainerItems(obj)} Items={e}/> :
                                        e.kind === "text" ? <TextBlock containerItems={containerItems} setContainerItems={(obj)=> setContainerItems(obj)} Items={e} /> :
                                            <></>) :
                        <h3 style={{ textAlign: "center", marginTop: "20%" }}>Перетащите сюда блок</h3>
                }
            </div>
        )
    }


    return (<>

        <div className={styles.headerBar}>
            <div className={styles.headLBar}>
                <img width={36} height={36} src="./img/construct.svg" alt="" />
                <h4 style={{fontSize: "18px"}}>Название нового сайта</h4>
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
                    {/* <img style={{ transform: `rotate(${rotateWidg}deg)` }} src="./img/widgets.svg" alt="" />
                    <select value={value} onChange={(event) => { setValue(event.target.value); setRotateWidg(prev => prev + 90) }}>
                        {options}
                    </select> */}
                    <div onClick={() => setValue((prev) => !prev.includes("0") ? [...prev, "0"] : prev.filter((e) => e !== "0"))} className={styles.select}>
                        <img src="./img/widgets.svg" alt="" />
                        <h4>Формы</h4>
                        <img width={14} height={11} src="./img/select-arr.svg" alt="" />
                    </div>
                    <div className={styles.sideBarContent}>
                        {
                            value.includes("0") &&
                            <>

                                <SidebarBlock kind={"form"} setContainerItems={setContainerItems} title={"Стандартная Форма"} descr={"Основной блок с формой"} />
                            </>
                        }
                    </div>
                    <div onClick={() => setValue((prev) => !prev.includes("1") ? [...prev, "1"] : prev.filter((e) => e !== "1"))} className={styles.select}>
                        <img src="./img/widgets.svg" alt="" />
                        <h4>Навигация</h4>
                        <img width={14} height={11} src="./img/select-arr.svg" alt="" />
                    </div>
                    <div className={styles.sideBarContent}>
                        {
                            value.includes("1") &&
                            <>
                                <SidebarBlock setContainerItems={setContainerItems} kind={"nav"} title={"Стандартная навигация"} descr={"Блок с навигацией"} />
                            </>
                        }
                    </div>
                    <div onClick={() => setValue((prev) => !prev.includes("2") ? [...prev, "2"] : prev.filter((e) => e !== "2"))} className={styles.select}>
                        <img src="./img/widgets.svg" alt="" />
                        <h4>Шапки</h4>
                        <img width={14} height={11} src="./img/select-arr.svg" alt="" />
                    </div>
                    <div className={styles.sideBarContent}>
                        {
                            value.includes("2") &&

                            <>
                                <SidebarBlock
                                    kind={"header"}
                                    containerItems={containerItems}
                                    setContainerItems={setContainerItems}
                                    title={"Стандартная шапка"}
                                    descr={"Блок с стандартной шапкой"}
                                    elements={{
                                         h1: {val: "Сайт для вашего бизнеса", fontSize: "45px", color: "#FFF",},
                                          h4: {val: "Добавьте интересные подробности о вашей компании. Кликом на блок можно изменить его наполнение или настроить стили.", fontSize: "20px", color: "#FFF"},
                                           btn: {val: "Создать",fontSize: "15px", bg: "#2971F5", color: "#FFF"} 
                                           }} />
                            </>
                        }
                    </div>
                    <div onClick={() => setValue((prev) => !prev.includes("3") ? [...prev, "3"] : prev.filter((e) => e !== "3"))} className={styles.select}>
                        <img src="./img/widgets.svg" alt="" />
                        <h4>Текст</h4>
                        <img width={14} height={11} src="./img/select-arr.svg" alt="" />
                    </div>
                    <div className={styles.sideBarContent}>
                        {
                            value.includes("3") &&

                            <>
                                <SidebarBlock 
                                kind={"title"} 
                                setContainerItems={setContainerItems} 
                                title={"Стандартная заголовок"} 
                                descr={"Блок с стандартным заголовком"} 
                                elements={{
                                    h1: {val: "Заголовок", fontSize: "35px", color: "#000",},
                                      }}/>

                                <SidebarBlock 
                                kind={"text"} 
                                setContainerItems={setContainerItems} 
                                title={"Стандартный текст"} 
                                descr={"Блок с стандартным текстом"} 
                                elements={{
                                         p: {val: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur ut ea dignissimos, mollitia a. Eaque a ducimus, tenetur temporibus dolore perspiciatis veritatis exercitationem rem quidem natus et numquam? Quisquam.", fontSize: "25px", color: "#000",},
                                           }} />
                                           
                            </>
                        }
                    </div>


                    {/* Сделать объекты для генерации блоков селектора*/}
                </div>

            </DndProvider>
        </div>
    </>
    )
}