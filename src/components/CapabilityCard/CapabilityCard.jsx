import React from 'react';
import styles from './CapabilityCard.module.scss'

const CapabilityCard = ({imgSrc , title, txt}) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="icon"/>
      <h3>{title}</h3>
      <p>{txt}</p>
    </div>
  );
};

export default CapabilityCard;