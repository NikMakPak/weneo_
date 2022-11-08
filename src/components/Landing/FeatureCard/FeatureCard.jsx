import React from 'react';
import styles from './FeatureCard.module.scss'

const FeatureCard = ({imgSrc, title, txt, gifSrc}) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img src={imgSrc} alt="icon"/>
                <h3>{title}</h3>
                <p>{txt}</p>
            </div>
            <img src={gifSrc} alt="gif"/>

        </div>
    );
};

export default FeatureCard;