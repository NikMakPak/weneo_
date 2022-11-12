import React from 'react';
import Navbar from "../../components/NavBar/NavBar";
import CapabilityCard from "../../components/CapabilityCard/CapabilityCard";
import styles from './Landing.module.scss';
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Form from "../../components/Form/Form"; //стоит все стили лендинга сюда перенести чтобы разгарничить все страницы потом
const Landing = () => {
    return (
        <>
            <div className="container">
                <img className={styles.logo} width={904} height={864} src="./img/logo.svg" alt="" />
                <div className={styles.header}>
                    <Navbar />
                    <div className="wrap">
                        <div className={styles.infoBlock}>
                            <h1><span>Инновационная</span> веб студия для вашего вашего <span>бизнеса</span></h1>
                            <p>Cоздание нового или редизайне существующего проекта с помощью искусственного интеллекта и нашей современной платформы.</p>
                            <button className={styles.btn}>Попробовать инновации <img src="./img/arrow.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className={styles.capabilityGroup}>
                    <CapabilityCard imgSrc={"./img/new-tech.svg"} title={'Новые инструменты'} txt={'текста чутка'} />
                    <CapabilityCard imgSrc={"./img/construct.svg"} title={'Админ конструктор'} txt={'текста чутка'} />
                    <CapabilityCard imgSrc={"./img/platf.svg"} title={'Единая платформа'} txt={'текста чутка'} />
                </div>
                <h2 className='title'>Ключевые особенности</h2>
                <section className={styles.features}>
                    <FeatureCard
                        txt={'Функция удобного переноса сайта заказчика со старой платформы + современный продающий дизайн.'}
                        imgSrc={"./img/webconstruct.svg"}
                        gifSrc={"./img/gif.png"}
                        title={'Легкий блочный конструктор'}
                    />
                    <FeatureCard
                        txt={'Функция удобного переноса сайта заказчика со старой платформы + современный продающий дизайн.'}
                        imgSrc={"./img/webconstruct.svg"}
                        gifSrc={"./img/gif.png"}
                        title={'Легкий блочный конструктор'}
                    />
                    <FeatureCard
                        txt={'Функция удобного переноса сайта заказчика со старой платформы + современный продающий дизайн.'}
                        imgSrc={"./img/webconstruct.svg"}
                        gifSrc={"./img/gif.png"}
                        title={'Легкий блочный конструктор'}
                    />
                    <FeatureCard
                        txt={'Функция удобного переноса сайта заказчика со старой платформы + современный продающий дизайн.'}
                        imgSrc={"./img/webconstruct.svg"}
                        gifSrc={"./img/gif.png"}
                        title={'Легкий блочный конструктор'}
                    />
                </section>
                <section className={styles.feedback}>
                    <h2 className='title'>Оставьте заявку, мы свяжемся с вами сегодня!</h2>
                    <Form />
                </section>
                <footer>
                    <div className={styles.footer_content}>
                        <div className={styles.links}>
                            <a className={styles.to_email} href="/">Написать на email</a>
                            <div className={styles.link_imgs}>
                                <a href="/"><img width={60} height={60} src="./img/telegram.svg" alt="Telegram" /></a>
                                <a href="/"><img width={60} height={60} src="./img/vk.png" alt="" /></a>
                            </div>
                        </div>
                        <button className={`${styles.footer_btn} ${styles.btn}`}>Посетить Единую плафторму<img src="./img/arrow_w.svg" alt="" /></button>
                    </div>
                    <p>© 2022, WeNeo</p>
                </footer>
            </div>
        </>
    );
};

export default Landing;