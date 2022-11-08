import React from "react"
import styles from './Constructor.module.scss';
import CapabilityCard from "../../components/CapabilityCard/CapabilityCard";
export default function Constructor() {
    return (<>
        <div className={styles.headerBar}>
            <div className={styles.headLBar}>
                <img width={36} height={36} src="./img/construct.svg" alt="" />
                <h3>Название нового сайта</h3>
            </div>
            <div className={styles.headRBar}>
               <img src="./img/undo.svg" alt="" />
               <img style={{transform: "rotateY(180deg)"}} src="./img/undo.svg" alt="" />
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
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
                <h1 style={{'textAlign': "center", "marginTop": 100}}>Добро пожаловать в инновационный веб конструктор!</h1>
            </div>
            <div className={styles.sideBar}>
123
            </div>

        </div>
        </>
    )
}