import React from "react"
import styles from './Constructor.module.scss';
export default function Constructor() {
    return (
        <div className={styles.header_bar}>
            <div className={styles.lBar}>
                <img width={36} height={36} src="./img/construct.svg" alt="" />
                <h3>Название нового сайта</h3>
            </div>
            <div className={styles.rBar}>
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
    )
}