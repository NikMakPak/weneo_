import React from 'react';
import styles from './Popup.module.scss'



const Popup = ({ active, setActive, pos, blockStyles, setBlockStyles, Items, containerItems, setContainerItems}) => {
  const [switchSatt, setSwitchSatt] = React.useState(false)
  console.log(Object.entries(blockStyles))
  const updateContainer =() => {
    return setContainerItems(containerItems.map(o => {
        if (o.id === Items.id) {
            return { ...Items, elements: blockStyles };
        }
        return o;
    }))
}
  return (
    <div onClick={(e) => {
      e.stopPropagation()
    }}>
      <div style={{paddingTop : `${pos.posY}px`,
      paddingLeft: `${pos.posX}px`}} className={active ? styles.active : styles.modal} onClick={() => {
        updateContainer()
        setActive(false)
      }
      }>
      <div className={styles.modal__content} onClick={(e) => {
        e.stopPropagation()
      }
      }>
        <div className={styles.modalSwitch}>
          <div onClick={() => setSwitchSatt(true)} className={switchSatt === false ? styles.Switcher : styles.switchActive}>
            <img src="./img/tune.svg" alt="" />
          </div>
          <div onClick={() => setSwitchSatt(false)} className={switchSatt ? styles.Switcher : styles.switchActive}>
            <img src="./img/format_size.svg" alt="" />
          </div>
        </div>
        <div className={styles.sattingsWrap}>
          {
           switchSatt === false ? Object.entries(blockStyles).map((e) => {
              return (
                <>
                <h4>{e[0]}</h4>
                <input onChange={(v) => setBlockStyles({...blockStyles,  [e[0]]: {val: v.target.value, color: e[1].color, fontSize: e[1].fontSize, bg: e[1].bg}})} type="text" defaultValue={e[1].val}/>
                <input onChange={(v) => setBlockStyles({...blockStyles,  [e[0]]: {val: e[1].val, color: e[1].color, fontSize: v.target.value, bg: e[1].bg}})} type="text" defaultValue={e[1].fontSize}/>
                <input onChange={(v) => setBlockStyles({...blockStyles,  [e[0]]: {val: e[1].val, color: v.target.value, fontSize: e[1].fontSize, bg: e[1].bg}})} type="text" defaultValue={e[1].color}/>
                </>
              )
            })
            : Object.entries(blockStyles).map((e) => {
              return (
                <>
                {/* <h4>{e[0]}</h4>
                <input style={{background: e[1].color, marginBottom: "10px"}} type="text" defaultValue={e[1].color}/> */}
                {/* <h4>{e[0]}</h4> */}
                
                <h4>{e[0]} {e[1].color} {e[1].fontSize} {e[1].bg}</h4>
                </>
              )
            })

          }
        </div>
      </div>
    </div>
    </div >
  );
};

export default Popup;