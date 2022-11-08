import React from 'react';
import styles from './Form.module.scss'
const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input_block}>
                <h4>ФИО</h4>
                <input type="text" id="fio" placeholder="Иванов Иван Иванович" required />
            </div>
            <div className={styles.input_block}>
            <h4>Телефон</h4>
                <input type="tel" id="tel" placeholder="+7 925 968 93-37" required /> {/* надо написать парсер телефона в норм формат для удобства*/}
            </div>
            <div className={styles.input_block}>
            <h4>Тема вашей идеи для сайта</h4>
                <textarea type="text" id="idea" placeholder="Тема вашей идеи для сайта" required />
            </div>
            <div className={styles.input_block}>
            <button type={"submit"}>Отправить!</button>
            </div>
        </form>
    );
};

export default Form;