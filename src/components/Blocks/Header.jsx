import React from "react"
import Popup from "../Popup/Popup"
export default function Header() {
    const [modalActive, setModalActive] = React.useState(false)
    return (
        <div style={{
            padding: "50px",
            background: '#FFF',
            width: "100%",
            height: "95vh",
            display: 'flex',
            background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./img/header-img.jpg') center",
            backgroundSize: "cover",
            flexDirection: "column",
            backgroundPosition: "center"
        }}>
            <div style={{
                margin: "auto",
                textAlign: "center",
                width: "50%",
                color: "#FFF",
            }}>
                <h1 style={{fontSize: "45px"}}>Сайт для вашего бизнеса</h1>
                <h4 style={{marginBottom: "50px"}}>Добавьте интересные подробности о вашей компании. Кликом на блок можно изменить его наполнение или настроить стили.</h4>
                <button style={{
                width: "200px",
                height: "45px",
                borderRadius: "20px",
                border: "none",
                color: "#FFF",
                cursor: "pointer",
                margin: "auto",
                background: "#2971f5"
            }}>Создать</button>
            </div>
            <Popup active={false}/>
        </div>
    )
}