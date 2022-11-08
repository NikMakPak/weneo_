import React from 'react';
import {navConstants} from "../../utils";
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.nav__list}>
      {
        navConstants.map(item=>
            <li key={item.id} className="nav__item">{item.title}</li>
        )
      }
      <li > <a className={styles.nav__phone} href="tel:+79259689337"> +7 925 968 93-37</a></li>
      <li><img src="./img/person.svg" alt="" /></li>
    </nav>
  );
};

export default NavBar;