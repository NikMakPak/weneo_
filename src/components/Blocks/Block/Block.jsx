import React, {useCallback, useState} from 'react';
import MiniBlock from "../MiniBlock/MiniBlock";
import BlockClass from "../../../utils/Block";
import update from "immutability-helper"; // удалить пакет 


const Block = ({col, children}) => {
  return (
    <div style={{
      padding: "50px",
      background: '#FFF',
      width: "100%",
      height: "300px",
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      border: "1px dashed lightgray"
    }}>
      
      {children}
    </div>
  );
};

export default Block;