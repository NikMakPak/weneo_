import React from "react"
import s from "./AlertMessage.module.scss"

const AlertMessage = ({ callback }) => {
    const [isOpen, setIsOpen] = React.useState(true)
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
                    <button
                        className={s.pages_popup__leave_btn}
                        onClick={() => setIsOpen(false)}
                    ></button>
                </div>
                <div className={s.pages_popup__list}>
                    <div className={s.pages_popup__icon}></div>
                    <div className={`${s.pages_popup__item}`}>
                        <p className={s.pages_popup__name}>Удаление блока</p>
                        <p className={s.pages_popup__name_text}>
                            Вы уверены, что хотите удалить этот блок?
                        </p>
                        <div className={s.pages_popup__buttons}>
                            <button
                                onClick={() => setIsOpen(false)}
                                className={s.pages_popup__button_left}
                            >
                                Оставить
                            </button>
                            <button
                                onClick={() => callback()}
                                className={s.pages_popup__button_right}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertMessage
