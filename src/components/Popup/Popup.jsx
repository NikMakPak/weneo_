import React from 'react';
import styles from './Popup.module.scss'



const Popup = ({ active, setActive, pos, blockStyles, setBlockStyles}) => {
  return (
    <div onClick={(e) => {
      e.stopPropagation()
    }}>
      <div style={{paddingTop : `${pos.posY}px`,
      paddingLeft: `${pos.posX}px`}} className={active ? styles.active : styles.modal} onClick={() => {
        
        setActive(false)
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
          <p>fontSize</p>
          <button onClick={() => setBlockStyles(blockStyles+4)}>+</button>
          <button onClick={() => setBlockStyles(blockStyles-4)}>-</button>
        </div>
      </div>
    </div>
    </div >
  );
};

export default Popup;