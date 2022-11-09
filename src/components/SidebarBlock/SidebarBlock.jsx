import React from 'react';
import styles from './SidebarBlock.module.scss'

const SidebarBlock = ({ title, descr }) => {
    return (
        <div className={styles.block}>
            <img src='./img/grid_view.svg' alt="icon" />
            <div className={styles.content}>
                <h4>{title}</h4>
                <p>{descr}</p>
            </div>
        </div>
    );
};

export default SidebarBlock;