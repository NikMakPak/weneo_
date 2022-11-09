import React from 'react';
import styles from './Popup.module.scss'

const Popup = ({active, setActive}) => {

  console.log(active)
  return (
    <div>
      <div className={active ? styles.active : styles.modal} onClick={setActive}>
        <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>{`Sasha + ${active}`}</div>
      </div>
    </div>
  );
};

export default Popup;