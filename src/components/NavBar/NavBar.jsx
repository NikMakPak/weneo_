import React from 'react';
import {navConstants} from "../../utils";
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <ul className={styles.nav__list}>
      {navConstants.map(item=><li className="nav__item">{item.title}</li>)}
    </ul>
  );
};

export default NavBar;