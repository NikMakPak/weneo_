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
import renderPageMarkup from "../../utils/renderPageMarkup"
import { ItemTypes } from "../../components/SidebarBlock/ItemTypes"
import NavBar from "../../components/Blocks/Block/NavBar"
import Header from "../../components/Blocks/Header"
import TitleBlock from "../../components/Blocks/TitleBlock"
import PostBlock from "../../components/Blocks/PostBlock"
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"
import PopupPages from "../../components/PopupPages"
import { useDispatch, useSelector } from "react-redux"
import { setIsOpen } from "../../redux/slices/pagesSlice"
import s from "./ContextMenuSave.module.scss"

export default function Constructor() {
    const [value, setValue] = React.useState("Добавить блок")
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
    const { isOpen } = useSelector((state) => state.pages) // попап выбора страниц
    const dispatch = useDispatch()
    const [isOpenContextMenuSave, setIsOpenContextMenuSave] =
        React.useState(false)

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
    console.log(renderPageMarkup(containerItems));
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
            backgroundColor = "rgba(0,0,0, 0.1)"
        } else if (canDrop) {
            backgroundColor = "rgba(0,0,0, 0.1)"
        }
        // console.log(containerItems)
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
                    <div
                        style={
                            rSideBar
                                ? {
                                    display: "flex",
                                    justifyContent: "end",
                                    height: "100%",
                                }
                                : {
                                    display: "flex",
                                    justifyContent: "center",
                                    height: "100%",
                                }
                        }
                    >
                        {rSideBar ? (
                            <img
                                width="68%"
                                src="./img/moveBlocksHelp.svg"
                                alt="Перетащите сюда блок"
                            />
                        ) : (
                            <img
                                width="38%"
                                src="./img/HelpStatic.svg"
                                alt="Перетащите сюда блок"
                            />
                        )}
                    </div>
                )}
            </div>
        )
    }

    return preview === false ? (
        <>
            {menuOpen && <SidebarMenu setMenuOpen={() => setMenuOpen()} />}
            {isOpen && <PopupPages />}
            {isOpenContextMenuSave && (
                <ContextMenuSave
                    setIsOpen={setIsOpenContextMenuSave}
                    isOpen={isOpenContextMenuSave}
                    title={"Сохранение и публикация"}
                />
            )}
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
                        onClick={() => dispatch(setIsOpen(true))}
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
                        <div
                            className={styles.uploadBarCont}
                            onClick={() => setIsOpenContextMenuSave(true)}
                        >
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
                            <div className={styles.barSelectorReturnGr}>
                                {value !== "Добавить блок" && (
                                    <img
                                        onClick={() =>
                                            setValue("Добавить блок")
                                        }
                                        src="./img/arrBack.svg"
                                        alt="<"
                                    />
                                )}
                                <h4>{value}</h4>
                            </div>
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
                            {value === "Добавить блок" && (
                                <div
                                    onClick={() => setValue("Форма")}
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
                            )}
                            {value === "Форма" && (
                                <div className={styles.sideBarContent}>
                                    {
                                        <>
                                            <SidebarBlock
                                                kind={"form"}
                                                setContainerItems={
                                                    setContainerItems
                                                }
                                                title={"Стандартная Форма"}
                                                descr={"Основной блок с формой"}
                                                prevImage={
                                                    "./img/formPreview.png"
                                                }
                                                mainStyle={
                                                    {
                                                        padding: "10px",
                                                        background: "#FFF",
                                                        height: "500px",
                                                        width: "100%",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }
                                                }
                                                elements={{

                                                    input_1: {
                                                        val: "Ivan@mail.ru",
                                                        width: "50%",
                                                        height: "60px",
                                                        padding: "0 20px",
                                                        margin: "auto",
                                                        borderRadius: "0px",
                                                        border: "1px solid #0003"
                                                    },
                                                    input_2: {
                                                        val: "Иван Иванов",
                                                        width: "50%",
                                                        height: "60px",
                                                        padding: "0 20px",
                                                        margin: "auto",
                                                        borderRadius: "0px",
                                                        border: "1px solid #0003"
                                                    },
                                                    input_3: {
                                                        val: "+7 999 999 99 99",
                                                        width: "50%",
                                                        height: "60px",
                                                        padding: "0 20px",
                                                        margin: "auto",
                                                        borderRadius: "0px",
                                                        border: "1px solid #0003"
                                                    },
                                                    button: {
                                                        val: "Отправить",
                                                        fontSize: "15px",
                                                        background: "#2971f5",
                                                        color: "#FFF",
                                                        cursor: "pointer",
                                                        margin: "auto",
                                                        border: "none",
                                                        width: "200px",
                                                        height: "40px",
                                                        borderRadius: "10px"
                                                    },
                                                }}
                                            />
                                        </>
                                    }
                                </div>
                            )}
                            {value === "Добавить блок" && (
                                <div
                                    onClick={() => setValue("Навигация")}
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
                            )}
                            <div className={styles.sideBarContent}>
                                {value === "Навигация" && (
                                    <>
                                        <SidebarBlock
                                            setContainerItems={
                                                setContainerItems
                                            }
                                            kind={"nav"}
                                            title={"Стандартная навигация"}
                                            prevImage={"./img/navPreview.png"}
                                            descr={"Блок с навигацией"}
                                            mainStyle={{
                                                padding: "20px",
                                                background: '#FFF',
                                                width: "100%",
                                                height: "50px",
                                                display: 'flex',
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                            elements={{
                                                h3:{
                                                    val: "Company name",
                                                    color: "#000",
                                                    fontSize: "25px"
                                                },
                                                ul: {
                                                    display: "flex",
                                                    listStyle: "none",
                                                    val: {
                                                        li_1: {
                                                            val: "О нас",
                                                            cursor: "pointer",
                                                            marginRight: "20px"
                                                        },
                                                        li_2: {
                                                            val: "Технологии",
                                                            cursor: "pointer",
                                                            marginRight: "20px"
                                                        },
                                                        li_3: {
                                                            val: "Заказать",
                                                            cursor: "pointer",
                                                            marginRight: "20px"
                                                        },
                                                    }
                                                },
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                            {value === "Добавить блок" && (
                                <div
                                    onClick={() => setValue("Обложка")}
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
                            )}
                            <div className={styles.sideBarContent}>
                                {value === "Обложка" && (
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
                                            mainStyle={
                                                {
                                                    width: "100%",
                                                    height: "100vh",
                                                    display: 'flex',
                                                    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://lichi.com/_next/static/media/career-header.b39c94ea.jpg') center", // ./img/header-img.jpg
                                                    backgroundSize: "cover",
                                                    flexDirection: "column",
                                                    backgroundPosition: "center",

                                                }
                                            }
                                            elements={{
                                                div: {
                                                    margin: "auto",
                                                    textAlign: "center",
                                                    width: "70%",
                                                    val: {
                                                        h1: {
                                                            val: "Сайт для вашего бизнеса",
                                                            fontSize: "45px",
                                                            color: "#FFF",
                                                        },
                                                        h4: {
                                                            val: "Добавьте интересные подробности о вашей компании. Кликом на блок можно изменить его наполнение или настроить стили.",
                                                            fontSize: "20px",
                                                            color: "#FFF",
                                                            marginBottom: "40px",
                                                        },
                                                        button: {
                                                            val: "Создать",
                                                            fontSize: "15px",
                                                            background: "#2971F5",
                                                            color: "#FFF",
                                                            width: "200px",
                                                            height: "45px",
                                                            borderRadius: "20px",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            margin: "0 auto",
                                                        },
                                                    }
                                                },

                                            }}
                                        />
                                    </>
                                )}
                            </div>
                            {value === "Добавить блок" && (
                                <div
                                    onClick={() => setValue("Текст")}
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
                            )}
                            <div className={styles.sideBarContent}>
                                {value === "Текст" && (
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
                                            mainStyle={{
                                                width: "100%"
                                            }}
                                            elements={{
                                                h1: {
                                                    val: "Заголовок",
                                                    fontSize: "35px",
                                                    color: "#000",
                                                    textAlign: "center",
                                                    margin: "10px"
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
                                            mainStyle={{
                                                width: "100%",
                                                padding: "10px",
                                            }}
                                            elements={{
                                                p: {
                                                    val: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur ut ea dignissimos, mollitia a. Eaque a ducimus, tenetur temporibus dolore perspiciatis veritatis exercitationem rem quidem natus et numquam? Quisquam.",
                                                    fontSize: "25px",
                                                    color: "#000",
                                                    width: "70%",
                                                    margin: "0 auto",
                                                    lineHeight: "30px",
                                                    textAlign: "center",
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
                                            mainStyle={{
                                                margin: "0 auto",
                                                width: "50%"
                                            }}
                                            elements={{
                                                h3: {
                                                    val: "Новая статья",
                                                },

                                                p: {
                                                    val: "Веб-сайт как система электронных документов (файлов данных и кода) может принадлежать частному лицу или организации и быть доступным в компьютерной сети под общим доменным именем и IP-адресом или локально на одном компьютере. В статье журнала «Хозяйство и право» также было высказано мнение, что каждый сайт имеет своё название, которое при этом не следует путать с доменным именем. С точки зрения авторского права сайт является составным произведением, соответственно название сайта подлежит охране наряду с названиями всех прочих произведений.Все сайты в совокупности составляют Всемирную паутину, где коммуникация (паутина) объединяет сегменты информации мирового сообщества в единое целое — базу данных и коммуникации планетарного масштаба. Для прямого доступа клиентов к сайтам на серверах был специально разработан протокол HTTP.",
                                                    fontSize: "20px",
                                                    lineHeight: "25px"
                                                },
                                                ul: {
                                                    listStyle: "none",
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    val: {
                                                        li_1: {
                                                            val: "...",
                                                            marginRight: "20px",
                                                            border: "1px solid gray",
                                                            borderRadius: "15px",
                                                            padding: "5px 5px",
                                                            marginBottom: "5px",
                                                        },
                                                        li_2: {
                                                            val: "...",
                                                            marginRight: "20px",
                                                            border: "1px solid gray",
                                                            borderRadius: "15px",
                                                            padding: "5px 5px",
                                                            marginBottom: "5px",
                                                        },
                                                        li_3: {
                                                            val: "...",
                                                            marginRight: "20px",
                                                            border: "1px solid gray",
                                                            borderRadius: "15px",
                                                            padding: "5px 5px",
                                                            marginBottom: "5px",
                                                        }
                                                    },
                                                }
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

function ContextMenuSave({ isOpen, setIsOpen }) {
    const sortRef = React.useRef(null)

    const hidePopup = (event) => {
        if (!event.nativeEvent.path.includes(sortRef.current)) {
            setIsOpen(false)
        }
    }

    if (!isOpen) {
        return
    }

    return (
        <div className={`${s.pages_popup} ${s.smooth}`} onClick={hidePopup}>
            <div
                className={`${s.pages_popup__container} ${s.pages_popup__center}`}
                ref={sortRef}
            >
                <div className={s.pages_popup__title}>
                    <p>Сохранение и публикация</p>
                    <button
                        className={s.pages_popup__leave_btn}
                        onClick={() => setIsOpen(false)}
                    ></button>
                </div>

                <div className={s.pages_popup__list}>
                    <div className={s.pages_popup__item}>
                        <p className={s.pages_popup__name}>
                            Редактируемая версия
                        </p>
                        <p className={s.pages_popup__web}>
                            Синхронизировано с сервером две минуты назад
                        </p>
                        <a href="#" className={s.pages_popup__icon}></a>
                    </div>
                    <div className={s.pages_popup__button}>
                        <button>Опубликовать</button>
                    </div>
                    <div
                        className={`${s.pages_popup__item} ${s.pages_popup__item_second}`}
                    >
                        <p className={s.pages_popup__name}>
                            Публичная версия на сайте
                        </p>
                        <p className={s.pages_popup__web}>
                            Опубликована 01.12.2022 в 13:26
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
