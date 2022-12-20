import React from "react"
import axios from "axios"
import styles from "./Constructor.module.scss"
import SidebarBlock from "../../components/SidebarBlock/SidebarBlock"
// import Block from "../../components/Blocks/Block/Block";
// import MiniBlock from "../../components/Blocks/MiniBlock/MiniBlock";
import TextBlock from "../../components/Blocks/TextBlock"
import FormBlock from "../../components/Blocks/FormBlock"
import { useDrop, DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { ItemTypes } from "../../components/SidebarBlock/ItemTypes"
import NavBar from "../../components/Blocks/Block/NavBar"
import Header from "../../components/Blocks/Header"
import TitleBlock from "../../components/Blocks/TitleBlock"
import PostBlock from "../../components/Blocks/PostBlock"
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"
import PopupPages from "../../components/PopupPages"

export default function Constructor() {
    const [value, setValue] = React.useState([])
    const [preview, setPreview] = React.useState(false)
    const [rSideBar, setRsideBar] = React.useState(false)
    const [containerItems, setContainerItems] = React.useState([]) // Глобавльный стейт элементов
    const [containerStates, setContainerStates] = React.useState([1, 2])
    const [currentState, setCurrentState] = React.useState(
        containerStates.length
    )
    const [modalActive, setModalActive] = React.useState(false)
    const [setts, setSetts] = React.useState(false)
    const [impVal, setImpVal] = React.useState([])
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [isPagesPopupOpen, setIsPagesPopupOpen] = React.useState(false) // попап выбора страниц

    React.useEffect(() => {
        setCurrentState(
            containerStates.length === 0 ? 0 : containerStates.length
        )
        setCurrentState((prev) => prev - 1)
        setContainerStates((prev) => [
            prev[prev.length - 2],
            prev[prev.length - 1],
            containerItems,
        ])
    }, [containerItems])

    // Поместить объект стилей в отдельный файл
    const style = {
        overflow: preview ? "" : "auto",
        marginTop: preview ? "" : "68px",
        width: !rSideBar || preview ? "100%" : "83%",
        minWidth: "385px",
        minHeight: preview ? "" : "93vh",
        background: "#FFF",
        boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.25)",
        transition: "0.3s",
    }

    //Мб вынести в отдельный модуль
    const ConstuctWindow = () => {
        const [{ canDrop, isOver }, drop] = useDrop(() => ({
            accept: ItemTypes.BOX,
            drop: () => ({ name: "Dustbin" }),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }))
        const isActive = canDrop && isOver
        let backgroundColor = "#FFF"
        if (isActive) {
            // backgroundColor = 'gray'
        } else if (canDrop) {
            backgroundColor = "rgba(200,200,200, 0.1)"
        }
        console.log(containerItems)
        return (
            <div
                ref={drop}
                style={{ ...style, backgroundColor }}
                data-testid="dustbin"
            >
                {/* {isActive ? 'Release to drop' : 'Drag a box here'} */}
                {containerItems.length ? (
                    containerItems.map((e) =>
                        e.kind === "form" ? (
                            <FormBlock
                                containerItems={containerItems}
                                setContainerItems={(obj) =>
                                    setContainerItems(obj)
                                }
                                Items={e}
                            />
                        ) : e.kind === "nav" ? (
                            <NavBar
                                containerItems={containerItems}
                                setContainerItems={(obj) =>
                                    setContainerItems(obj)
                                }
                                Items={e}
                            />
                        ) : e.kind === "header" ? (
                            <Header
                                containerItems={containerItems}
                                setContainerItems={(obj) =>
                                    setContainerItems(obj)
                                }
                                Items={e}
                            />
                        ) : e.kind === "title" ? (
                            <TitleBlock
                                containerItems={containerItems}
                                setContainerItems={(obj) =>
                                    setContainerItems(obj)
                                }
                                Items={e}
                            />
                        ) : e.kind === "post" ? (
                            <PostBlock
                                containerItems={containerItems}
                                setContainerItems={(obj) =>
                                    setContainerItems(obj)
                                }
                                Items={e}
                            />
                        ) : e.kind === "text" ? (
                            <TextBlock
                                containerItems={containerItems}
                                setContainerItems={(obj) =>
                                    setContainerItems(obj)
                                }
                                Items={e}
                            />
                        ) : (
                            <></>
                        )
                    )
                ) : (
                    <h3 style={{ textAlign: "center", marginTop: "20%" }}>
                        Перетащите сюда блок
                    </h3>
                )}
            </div>
        )
    }

    return preview === false ? (
        <>
            {menuOpen && <SidebarMenu setMenuOpen={() => setMenuOpen()} />}
            {isPagesPopupOpen && (
                <PopupPages setIsPagesPopupOpen={setIsPagesPopupOpen} />
            )}
            {console.log(isPagesPopupOpen)}
            <div className={styles.headerBar}>
                <div className={styles.headLBar}>
                    <div
                        onClick={() => setMenuOpen(true)}
                        className={styles.opnLbar}
                    >
                        <img
                            width={18}
                            height={12}
                            src="./img/opnLbar.svg"
                            alt="Opn"
                        />
                        <div className={styles.opnLbarCont}>
                            <h4 style={{ fontSize: "14px" }}>Мой сайт</h4>
                            <p>testsite.weneo.io</p>
                        </div>
                        <img
                            width={23}
                            height={52}
                            src="./img/opnLbarRect.svg"
                            alt=""
                        />
                    </div>
                    <div
                        onClick={() => setIsPagesPopupOpen((prev) => !prev)}
                        className={styles.opnPages}
                    >
                        <h4 style={{ fontSize: "14px" }}>Главная</h4>
                        <p>
                            страница
                            <img src="./img/arrBottom.svg" alt="" />
                        </p>
                    </div>
                </div>
                <div className={styles.headRBar}>
                    <div className={styles.undo}>
                        <img
                            onClick={() => {
                                return setContainerItems(
                                    containerStates[currentState - 1]
                                )
                            }}
                            src="./img/undo.svg"
                            alt=""
                        />
                        <div className={styles.undoLine}></div>
                        <img
                            onClick={() => {
                                return setContainerItems(
                                    containerStates[currentState - 1]
                                )
                            }}
                            style={{ transform: "rotateY(180deg)" }}
                            src="./img/undo.svg"
                            alt=""
                        />
                    </div>
                    <div className={styles.prewiew}>
                        <img
                            onClick={() => setPreview(true)}
                            src="./img/eye.svg"
                            alt=""
                        />
                    </div>
                    <div
                        onClick={() => setRsideBar(true)}
                        className={styles.newBlock}
                    >
                        <h4>Новый блок</h4>
                        <img
                            src="./img/plus.svg"
                            onClick={() => setModalActive(true)}
                            alt=""
                        />
                    </div>
                    <div className={styles.uploadBar}>
                        <div className={styles.uploadBarCont}>
                            <p>
                                <img src="./img/save.svg" alt="" />
                                минуту назад
                            </p>
                            <p>
                                <img src="./img/invEye.svg" alt="" />
                                01.12.22 13:26
                            </p>
                        </div>
                        <div
                            onClick={() => setSetts(!setts)}
                            className={styles.uploadBtn}
                        >
                            <img src="./img/upload.svg" alt="" />
                        </div>
                    </div>
                    {rSideBar && (
                        <div className={styles.barSelector}>
                            <h4>Добавить блок</h4>
                            <img
                                onClick={() => setRsideBar(false)}
                                src="./img/cross.svg"
                                alt="x"
                            />
                        </div>
                    )}
                </div>
            </div>
            {setts && (
                <div
                    className={styles.contmodal}
                    onClick={() => setSetts(!setts)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={styles.sattsStyle}
                    >
                        <h4>Экспорт</h4>
                        <p>
                            Скопируйте конфигурацию вашего проекта и сохраните в
                            надежном месте
                        </p>
                        <input
                            type="text"
                            defaultValue={JSON.stringify(containerItems)}
                        />
                        <h4>Импорт</h4>
                        <p>
                            Вставьте конфигурацию вашего проекта и нажмите
                            кнопку "Применить"
                        </p>
                        <input
                            type="text"
                            onChange={(v) => setImpVal(v.target.value)}
                        />
                        <button
                            onClick={() => {
                                setContainerItems(JSON.parse(impVal))
                                setSetts(!setts)
                            }}
                        >
                            Применить
                        </button>
                    </div>
                </div>
            )}
            <div className={styles.construct}>
                <DndProvider backend={HTML5Backend}>
                    <ConstuctWindow />

                    {rSideBar && (
                        <div className={styles.sideBar}>
                            {/* <img style={{ transform: `rotate(${rotateWidg}deg)` }} src="./img/widgets.svg" alt="" />
                    <select value={value} onChange={(event) => { setValue(event.target.value); setRotateWidg(prev => prev + 90) }}>
                        {options}
                    </select> */}
                            <div
                                onClick={() =>
                                    setValue((prev) =>
                                        !prev.includes("0")
                                            ? [...prev, "0"]
                                            : prev.filter((e) => e !== "0")
                                    )
                                }
                                className={styles.select}
                            >
                                <div className={styles.selectCont}>
                                    <img src="./img/form.svg" alt="" />
                                    <h4>Форма</h4>
                                </div>
                                <img
                                    width={14}
                                    height={11}
                                    src="./img/arrRight.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.sideBarContent}>
                                {value.includes("0") && (
                                    <>
                                        <SidebarBlock
                                            kind={"form"}
                                            setContainerItems={
                                                setContainerItems
                                            }
                                            title={"Стандартная Форма"}
                                            descr={"Основной блок с формой"}
                                            prevImage={"./img/formPreview.png"}
                                            elements={{
                                                input1: { val: "Ivan@mail.ru" },
                                                input2: { val: "Иван Иванов" },
                                                input3: {
                                                    val: "+7 999 999 99 99",
                                                },
                                                btn: {
                                                    val: "Отправить",
                                                    fontSize: "15px",
                                                    bg: "#2971f5",
                                                    color: "#FFF",
                                                },
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                            <div
                                onClick={() =>
                                    setValue((prev) =>
                                        !prev.includes("1")
                                            ? [...prev, "1"]
                                            : prev.filter((e) => e !== "1")
                                    )
                                }
                                className={styles.select}
                            >
                                <div className={styles.selectCont}>
                                    <img src="./img/nav.svg" alt="" />
                                    <h4>Навигация</h4>
                                </div>
                                <img
                                    width={14}
                                    height={11}
                                    src="./img/arrRight.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.sideBarContent}>
                                {value.includes("1") && (
                                    <>
                                        <SidebarBlock
                                            setContainerItems={
                                                setContainerItems
                                            }
                                            kind={"nav"}
                                            title={"Стандартная навигация"}
                                            prevImage={"./img/navPreview.png"}
                                            descr={"Блок с навигацией"}
                                            elements={{
                                                li1: { val: "О нас" },
                                                li2: { val: "Технологии" },
                                                li3: { val: "Заказать" },
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                            <div
                                onClick={() =>
                                    setValue((prev) =>
                                        !prev.includes("2")
                                            ? [...prev, "2"]
                                            : prev.filter((e) => e !== "2")
                                    )
                                }
                                className={styles.select}
                            >
                                <div className={styles.selectCont}>
                                    <img src="./img/cover.svg" alt="" />
                                    <h4>Обложка</h4>
                                </div>
                                <img
                                    width={14}
                                    height={11}
                                    src="./img/arrRight.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.sideBarContent}>
                                {value.includes("2") && (
                                    <>
                                        <SidebarBlock
                                            kind={"header"}
                                            containerItems={containerItems}
                                            setContainerItems={
                                                setContainerItems
                                            }
                                            title={"Стандартная шапка"}
                                            descr={
                                                "Блок с стандартной обложкой, включает в себя Заголовок, Описание и Кнопку"
                                            }
                                            prevImage={"./img/coverPreview.png"}
                                            elements={{
                                                h1: {
                                                    val: "Сайт для вашего бизнеса",
                                                    fontSize: "45px",
                                                    color: "#FFF",
                                                },
                                                h4: {
                                                    val: "Добавьте интересные подробности о вашей компании. Кликом на блок можно изменить его наполнение или настроить стили.",
                                                    fontSize: "20px",
                                                    color: "#FFF",
                                                },
                                                btn: {
                                                    val: "Создать",
                                                    fontSize: "15px",
                                                    bg: "#2971F5",
                                                    color: "#FFF",
                                                },
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                            <div
                                onClick={() =>
                                    setValue((prev) =>
                                        !prev.includes("3")
                                            ? [...prev, "3"]
                                            : prev.filter((e) => e !== "3")
                                    )
                                }
                                className={styles.select}
                            >
                                <div className={styles.selectCont}>
                                    <img src="./img/text.svg" alt="" />
                                    <h4>Текст</h4>
                                </div>
                                <img
                                    width={14}
                                    height={11}
                                    src="./img/arrRight.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.sideBarContent}>
                                {value.includes("3") && (
                                    <>
                                        <SidebarBlock
                                            kind={"title"}
                                            setContainerItems={
                                                setContainerItems
                                            }
                                            title={"Стандартная заголовок"}
                                            descr={
                                                "Блок с стандартным заголовком"
                                            }
                                            prevImage={"./img/titlePreview.png"}
                                            elements={{
                                                h1: {
                                                    val: "Заголовок",
                                                    fontSize: "35px",
                                                    color: "#000",
                                                },
                                            }}
                                        />

                                        <SidebarBlock
                                            kind={"text"}
                                            setContainerItems={
                                                setContainerItems
                                            }
                                            title={"Стандартный текст"}
                                            descr={"Блок с стандартным текстом"}
                                            prevImage={"./img/textPreview.png"}
                                            elements={{
                                                p: {
                                                    val: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur ut ea dignissimos, mollitia a. Eaque a ducimus, tenetur temporibus dolore perspiciatis veritatis exercitationem rem quidem natus et numquam? Quisquam.",
                                                    fontSize: "25px",
                                                    color: "#000",
                                                },
                                            }}
                                        />

                                        <SidebarBlock
                                            kind={"post"}
                                            setContainerItems={
                                                setContainerItems
                                            }
                                            title={"Постоблок AI"}
                                            descr={
                                                "Постоблок с созданием ключевых слов с помощью AI"
                                            }
                                            prevImage={
                                                "./img/AiPostblockPreview.png"
                                            }
                                            ai={true}
                                            elements={{
                                                title: {
                                                    val: "Новая статья",
                                                },

                                                p: {
                                                    val: "Веб-сайт как система электронных документов (файлов данных и кода) может принадлежать частному лицу или организации и быть доступным в компьютерной сети под общим доменным именем и IP-адресом или локально на одном компьютере. В статье журнала «Хозяйство и право» также было высказано мнение, что каждый сайт имеет своё название, которое при этом не следует путать с доменным именем. С точки зрения авторского права сайт является составным произведением, соответственно название сайта подлежит охране наряду с названиями всех прочих произведений.Все сайты в совокупности составляют Всемирную паутину, где коммуникация (паутина) объединяет сегменты информации мирового сообщества в единое целое — базу данных и коммуникации планетарного масштаба. Для прямого доступа клиентов к сайтам на серверах был специально разработан протокол HTTP.",
                                                },
                                            }}
                                        />
                                    </>
                                )}
                            </div>

                            {/* Сделать объекты для генерации блоков селектора*/}
                        </div>
                    )}
                </DndProvider>
            </div>
        </>
    ) : (
        <>
            <h5
                onClick={() => setPreview(false)}
                style={{
                    textAlign: "center",
                    cursor: "pointer",
                    margin: "5px 0",
                }}
            >
                Завершить просмотр
            </h5>
            <DndProvider backend={HTML5Backend}>
                <ConstuctWindow />
            </DndProvider>
        </>
    )
}
