import React from 'react';
import styles from './Popup.module.scss'

const Popup = ({ active, setActive, kind: kindMiniBlock, changeKind }) => {
  return (
    <div onClick={(e) => {
      e.stopPropagation()
      console.log('RootPopup', active)
    }}>
      <div className={active ? styles.active : styles.modal} onClick={() => {
        console.log("wrapperPopup", active)
        setActive()
      }
      }>
        <div className={styles.modal__content} onClick={(e) => {
          console.log('Modal', active)
          e.stopPropagation()
        }
        }>
          <div className={styles.modalSwitch}>
            <div className={styles.Switcher}>
              <img src="./img/tune.svg" alt="" />
            </div>
            <div className={styles.Switcher}>
              <img src="./img/format_size.svg" alt="" />
            </div>
          </div>
          <div className={styles.sattingsWrap}>
            <button onClick={() => changeKind('input')}>Форма</button>
            <button onClick={() => changeKind('text')}>Блок текста</button>
            <button onClick={() => changeKind('button')}>Кнопка</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;