import React from 'react';
import styles from './Popup.module.scss'

const Popup = ({active, setActive, kind: kindMiniBlock, changeKind}) => {
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
          <button onClick={() => changeKind('input')}>Форма</button>
          <button onClick={() => changeKind('text')}>Блок текста</button>
          <button onClick={() => changeKind('button')}>Кнопка</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;