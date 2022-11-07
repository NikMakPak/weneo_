import React from 'react';
import styles from './Form.module.scss'
const Form = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" id="fio" placeholder="Ваше фио" required/>
            <input type="tel" id="tel" placeholder="Ваш телефон" required/> {/* надо написать парсер телефона в норм формат для удобства*/}
            <input type="text" id="idea" placeholder="Тема вашей идеи для сайта" required/>
            <button type={"submit"}>Отправить!</button>
        </form>
    );
};

export default Form;