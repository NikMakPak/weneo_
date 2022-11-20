import React, {useEffect, useState} from 'react';
import styles from './LoginPopup.module.scss'
import {useInput} from "../../hooks/useInput";


const LoginPopup = ({active, setActive}) => {
  const email = useInput("", {isEmpty: true, minLength: 4, isEmail: true});
  const password = useInput("", {isEmpty: true, minLength: 8});
  const name = useInput("", {isEmpty: true, minLength: 3});
  const phone = useInput("", {isEmpty: true, minLength: 11, isPhone: true});
  const [isRegister, setRegister] = useState(false);

  const handleClick = () => {
    // Отправка на сервер
    if (isRegister) {
      console.log({name: name.value, phone: phone.value, email: email.value, password: password.value})
    } else {
      console.log({email: email.value, password: password.value})
    }
  }

  // сделать переход, чтобы сбрасывались введенные данные между логином и регистрацией
  const changeEnter = () => {
    setRegister(prevState => !prevState);
    // email.onChange("");
    // password.onChange("");
  }
  return (
    <div onClick={(e) => {
      e.stopPropagation()
    }}>
      <div className={active ? styles.active : styles.modal} onClick={() => {
        setActive(false)
      }}>
        <div className={styles.modal__content} onClick={e => {
          e.stopPropagation()
        }}><h1>{isRegister ? "Регистрация" : "Вход"}</h1>
          {isRegister && <>
            <div><label className={styles.label}>ФИО</label>
              <input className={styles.input} placeholder={"Иванов Иван Иванович"}
                     onBlur={(e) => name.onBlur(e)}
                     onChange={(e) => name.onChange(e)}
                     value={name.value}/></div>
            {(name.isDirty && name.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {(name.isDirty && name.minLengthError) && <div style={{color: 'red'}}>Некорректная длина</div>}
            <div><label className={styles.label}>Телефон</label>
              <input className={styles.input} placeholder={"8-999-999-99-99"} onBlur={(e) => phone.onBlur(e)}
                     onChange={(e) => phone.onChange(e)}
                     value={phone.value}/></div>
            {(phone.isDirty && phone.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {(phone.isDirty && phone.phoneError) && <div style={{color: 'red'}}>Неверный номер</div>}
          </>}
          <div>
            <label className={styles.label}>Почта</label>
            <input className={styles.input} placeholder={"example@mail.ru"}
                   onChange={(e) => email.onChange(e)}
                   onBlur={(e) => email.onBlur(e)}
                   value={email.value}/>
            {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Некорректная длина</div>}
            {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>Неправильная структура</div>}

          </div>
          <div><label className={styles.label}>Пароль</label>
            <input className={styles.input} placeholder={"****"} type="password"
                   onChange={(e) => password.onChange(e)}
                   onBlur={(e) => password.onBlur(e)}
                   value={password.value}/>
            {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>Некорректная длина</div>}
          </div>
          <button className={styles.submit}
                  disabled={isRegister ? (!email.inputValid || !password.inputValid || !name.inputValid || !phone.inputValid) : (!email.inputValid || !password.inputValid)}
                  onClick={handleClick}>{isRegister ? "Зарегистрироваться" : "Войти"}</button>
          <p className={styles.hasAccount} onClick={changeEnter}
             style={{cursor: "pointer"}}>{isRegister ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;