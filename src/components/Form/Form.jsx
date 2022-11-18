import React, { useState} from 'react';
import styles from './Form.module.scss'
const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [phone,setPhone] = useState('');
    const getFormatPhone = (value) =>{
        if (!value) return value;
        const phoneNumber = value.replace(/\D/g, '');
        if (phoneNumber.length < 5) return phoneNumber;
        if (phoneNumber.length < 8) return `${phoneNumber.slice(0,1)} (${phoneNumber.slice (1, 4)}) ${phoneNumber.slice(4)}`;
        return `${phoneNumber.slice(0,1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4,7)}-${phoneNumber.slice(7,11)}`;
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group + ' ' + styles.input_block}>
                <div>
                    <h4>ФИО</h4>
                    <input type="text" id="fio" placeholder="Иванов Иван Иванович" required />
                </div>
                <div>
                    <h4>Телефон</h4>
                    <input type="tel"
                           id="tel"
                           placeholder="8 925 968 93-37"
                           required
                           value={phone}
                           onChange={e=>setPhone(getFormatPhone(e.target.value))}
                    />
                </div>
            </div>
            <div className={styles.input_block}>
                <h4>Тема вашей идеи для сайта</h4>
                <textarea id="idea" placeholder="Тема вашей идеи для сайта" required />
            </div>
            <div className={styles.input_block}>
                <button type={"submit"}>Отправить!</button>
            </div>
        </form>
    );
};

export default Form;