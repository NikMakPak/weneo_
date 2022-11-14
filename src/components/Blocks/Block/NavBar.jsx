import React from "react"

export default function NavBar({}) {
    return(
        <div style={{
            padding: "20px",
            background: '#FFF',
            width: "100%",
            height: "50px",
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <img width={30} height={30} src="./img/construct.svg" alt="" />
            <ul style={{
                display: "flex",
                listStyle: "none",
                width: "300px",
                justifyContent: "space-around"
            }}>
                <li style={{
                    cursor: "pointer",
                }}>О нас</li>
                <li style={{
                    cursor: "pointer",
                }}>Технологии</li>
                <li style={{
                    cursor: "pointer",
                }}>Заказать</li>
            </ul>
        </div>
    )
}