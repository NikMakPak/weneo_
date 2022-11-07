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
                <img className='logo' width={404} height={464} src="./img/logo.svg" alt="" />
                <div className="header">
                    <Navbar />
                    <div className="wrap">
                        <div className="infoBlock">
                            <h1>Инновационная веб студия для вашего вашего бизнеса</h1>
                            <p>Cоздание нового или редизайне существующего проекта с помощью искусственного интеллекта и нашей современной платформы.</p>
                            <button className='btn'>Попробовать инновации</button>
                        </div>
                    </div>
                </div>
                <div className={styles.capabilityGroup}>
                    <CapabilityCard imgSrc={"./img/new-tech.svg"} title={'Новые инструменты'} txt={'текста чутка'}/>
                    <CapabilityCard imgSrc={"./img/construct.svg"} title={'Админ конструктор'} txt={'текста чутка'}/>
                    <CapabilityCard imgSrc={"./img/platf.svg"} title={'Единая платформа'} txt={'текста чутка'}/>
                </div>
                <section className={"features"}>
                    <h2>Ключевые особенности</h2>
                    <FeatureCard
                        txt={'Функция удобного переноса сайта заказчика со старой платформы + современный продающий дизайн.'}
                        imgSrc={"./img/webconstruct.svg"}
                        gifSrc={"./img/gif.png"}
                        title={'Легкий блочный конструктор'}
                    />
                </section>
                <section>
                    <h2></h2>
                    <Form/>
                </section>
            </div>
        </>
    );
};

export default Landing;