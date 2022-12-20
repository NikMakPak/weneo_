import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage, setIsOpen } from "../../redux/slices/pagesSlice"
import s from "./PopupPages.module.scss"

const PopupPages = () => {
    const dispatch = useDispatch()
    const { currentPage, items } = useSelector((state) => state.pages)
    const sortRef = React.useRef(null)

    const hidePopup = (event) => {
        if (!event.nativeEvent.path.includes(sortRef.current)) {
            dispatch(setIsOpen(false))
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
                        onClick={() => dispatch(setIsOpen(false))}
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
                            // onClick={() => setCurrentPage(id)}
                            onClick={() => dispatch(setCurrentPage(id))}
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
