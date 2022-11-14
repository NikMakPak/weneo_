import React from 'react';
import styles from './Popup.module.scss'

const Popup = ({ active, setActive}) => {
  return (
    <div onClick={(e) => {
      e.stopPropagation()
    }}>
      <div className={active ? styles.active : styles.modal} onClick={() => {
        setActive()
      }
      }>
        <div className={styles.modal__content} onClick={(e) => {
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
            <button>Форма</button>
            <button>Блок текста</button>
            <button>Кнопка</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;