import React from "react"

export default function FormBlock({}) {
    return(
        <div style={{
            padding: "50px",
            background: '#FFF',
            width: "100%",
            height: "500px",
            display: 'flex',
            flexDirection: "column",
            
          }}>
            <input placeholder="Ivan@mail.ru" style={{
                width: "50%",
                height: "60px",
                padding: "0 20px",
                margin: "auto"
            }} type="text" />
             <input placeholder="Иван Иванов" style={{
                width: "50%",
                height: "60px",
                padding: "0 20px",
                margin: "auto"
            }} type="text" />
             <input placeholder="+7 999 999 99 99" style={{
                width: "50%",
                height: "60px",
                padding: "0 20px",
                margin: "auto"
            }} type="text" />
            <button style={{
                width: "200px",
                height: "45px",
                borderRadius: "20px",
                border: "none",
                color: "#FFF",
                cursor: "pointer",
                margin: "auto",
                background: "#2971f5"
            }}>Отправить</button>
        </div>
    )
}