import React from 'react';
import {navConstants} from "../../utils";

const NavBar = () => {
  return (
    <ul className="nav__list">
      {navConstants.map(item=><li className="nav__item">{item.title}</li>)}
    </ul>
  );
};

export default NavBar;