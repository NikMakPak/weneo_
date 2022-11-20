import React, {useState} from 'react';
import styles from './ConstructorNavBar.module.scss'

const ConstructorNavBar = ({setModalActive}) => {

  return (
    <div className={styles.headerBar}>
      <div className={styles.headLBar}>
        <img width={36} height={36} src="./img/construct.svg" alt=""/>
        <h4 style={{fontSize: "18px"}}>Название нового сайта</h4>
      </div>
      <div className={styles.headRBar}>
        <img src="./img/undo.svg" alt=""/>
        <img style={{transform: "rotateY(180deg)"}} src="./img/undo.svg" alt=""/>
        <img src="./img/preview.svg" alt=""/>
        <img src="./img/person_min.svg" alt="" onClick={() => setModalActive(true)}/>
        <img src="./img/settings.svg" alt=""/>
        <div className={styles.barSelector}>
          <ul>
            <li>Контент</li>
            <li>Страницы</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConstructorNavBar;