import React from "react"
import styles from './Constructor.module.scss';
import SidebarBlock from "../../components/SidebarBlock/SidebarBlock";
import Block from "../../components/Blocks/Block/Block";

export default function Constructor() {
    const arOptions = ['Шаблоноблоки', 'Нейроноблоки', 'Позициоблоки'];
    const [value, setValue] = React.useState("");
    const [rotateWidg, setRotateWidg] = React.useState(0);

    const options = arOptions.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });
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
            <div className={styles.constrWindow}>
                {/* Рабочая зона */}
                <h1 style={{ 'textAlign': "center", "marginTop": 100 }}>Добро пожаловать в инновационный веб конструктор!</h1>
                <Block />
            </div>
            <div className={styles.sideBar}>
                <img style={{ transform: `rotate(${rotateWidg}deg)` }} src="./img/widgets.svg" alt="" />
                <select value={value} onChange={(event) => { setValue(event.target.value); setRotateWidg(prev => prev + 90) }}>
                    {options}
                </select>
                <div className={styles.sideBarContent}>
                    {value === "0" ?
                        <>
                            <SidebarBlock title={"Шаблоноблок 1"} descr={"описание что делает блок, с текстом и описанием"} />
                            <SidebarBlock title={"Шаблоноблок 2"} descr={"описание что делает блок, с текстом и описанием"} />
                            <SidebarBlock title={"Шаблоноблок 3"} descr={"описание что делает блок, с текстом и описанием"} />
                            <SidebarBlock title={"Шаблоноблок 4"} descr={"описание что делает блок, с текстом и описанием"} />
                        </>
                        : value === "1" ?
                            <>
                                <SidebarBlock title={"Нейроноблок 1"} descr={"описание что делает блок, с текстом и описанием"} />
                                <SidebarBlock title={"Нейроноблок 2"} descr={"описание что делает блок, с текстом и описанием"} />
                                <SidebarBlock title={"Нейроноблок 3"} descr={"описание что делает блок, с текстом и описанием"} />
                                <SidebarBlock title={"Нейроноблок 4"} descr={"описание что делает блок, с текстом и описанием"} />
                            </>
                            : <>
                            <SidebarBlock title={"Позициоблок 1"} descr={"описание что делает блок, с текстом и описанием"} />
                            <SidebarBlock title={"Позициоблок 2"} descr={"описание что делает блок, с текстом и описанием"} />
                            <SidebarBlock title={"Позициоблок 3"} descr={"описание что делает блок, с текстом и описанием"} />
                            <SidebarBlock title={"Позициоблок 4"} descr={"описание что делает блок, с текстом и описанием"} />
                        </>
                        }
                </div>
            </div>

        </div>
    </>
    )
}