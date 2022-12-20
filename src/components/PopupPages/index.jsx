import React from "react"
import s from "./PopupPages.module.scss"

const PopupPages = ({ setIsPagesPopupOpen }) => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const sortRef = React.useRef(null)

    const items = [
        { id: 1, name: "Товары", website: "testsite.weneo.io/page1" },
        { id: 2, name: "О нас", website: "testsite.weneo.io/about" },
        { id: 3, name: "Главная", website: "testsite.weneo.io" },
        { id: 4, name: "Контакты", website: "testsite.weneo.io/contacts" },
    ]

    const hidePopup = (event) => {
        if (!event.nativeEvent.path.includes(sortRef.current)) {
            setIsPagesPopupOpen(false)
        }
    }

    return (
        <div className={`${s.pages_popup} ${s.smooth}`} onClick={hidePopup}>
            <div
                className={`${s.pages_popup__container} ${s.pages_popup__center}`}
                ref={sortRef}
            >
                <div className={s.pages_popup__title}>
                    <p>Страницы</p>
                    <button
                        className={s.pages_popup__leave_btn}
                        onClick={() => setIsPagesPopupOpen(false)}
                    ></button>
                </div>
                <div className={s.decorate}></div>

                <div className={s.pages_popup__list}>
                    {items.map(({ id, name, website }) => (
                        <div
                            className={`${s.pages_popup__item} ${
                                currentPage === id
                                    ? s.pages_popup__item_active
                                    : ""
                            }`}
                            key={id}
                            onClick={() => setCurrentPage(id)}
                        >
                            <p className={s.pages_popup__name}>{name}</p>
                            <p className={s.pages_popup__web}>{website}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopupPages
