import React from 'react';
import styles from './Popup.module.scss'



const Popup = ({ active, setActive, pos, blockStyles, setBlockStyles, Items, containerItems, setContainerItems }) => {
  const [switchSatt, setSwitchSatt] = React.useState(false)
  console.log(Object.entries(blockStyles))
  const updateContainer = () => {
    return setContainerItems(containerItems.map(o => {
      if (o.id === Items.id) {
        return { ...Items, elements: blockStyles };
      }
      return o;
    }))
  }
  const deleteBlock = () => {
    return setContainerItems(containerItems.filter((o) => o.id !== Items.id))
  }

  function blockMoveDown() {
    let index = containerItems.indexOf(Items);
    containerItems.splice(index, 1)
    containerItems.splice(index + 1, 0, Items)
    setContainerItems(containerItems)
    updateContainer()
  }
  function blockMoveUp() {
    let index = containerItems.indexOf(Items);
    containerItems.splice(index, 1)
    containerItems.splice(index - 1, 0, Items)
    setContainerItems(containerItems)
    updateContainer()
  }


  console.log();
  return (
    <div onClick={(e) => {
      e.stopPropagation()
    }}>
      <div style={{
        paddingTop: `${pos.posY-300}px`,
        paddingLeft: `${pos.posX}px`
      }} className={active ? styles.active : styles.modal} onClick={() => {
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
                console.log(e[1]);
                return (
                  <>
                  <h4>{e[0]}</h4>
                    {
                      Object.entries(e[1]).map((obj) => {
                        return (
                          <>
                            <p style={{opacity: "0.6"}}>{obj[0]}</p>
                            <input onChange={(v) => setBlockStyles({ ...blockStyles, [e[0]]: {...e[1], [obj[0]]: v.target.value } })} type="text" defaultValue={obj[1]} />
                          </>
                        )
                      })
                    }
                  </>
                )
              })
                : <>
                  <h4 onClick={() => deleteBlock()} style={{ color: "red", cursor: "pointer" }}>Удалить блок</h4>
                  <h4 style={{ cursor: "pointer" }} onClick={() => blockMoveUp()}>Вверх</h4>
                  <h4 style={{ cursor: "pointer" }} onClick={() => blockMoveDown()}>Вниз</h4>
                </>
              // Object.entries(blockStyles).map((e) => {
              //   return (
              //     <>
              //     {/* <h4>{e[0]}</h4>
              //     <input style={{background: e[1].color, marginBottom: "10px"}} type="text" defaultValue={e[1].color}/> */}
              //     {/* <h4>{e[0]}</h4> */}

              //     <h4>{e[0]} {e[1].color} {e[1].fontSize} {e[1].bg}</h4>
              //     </>
              //   )
              // })

            }
          </div>
        </div>
      </div>
    </div >
  );
};

export default Popup;