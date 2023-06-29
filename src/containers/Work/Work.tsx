import styles from "./Work.module.css";

const Work = () => {
    return (
        <div id="work" className={styles.work__section}>
            <div className={styles.work__container}>
                <h2 className={styles.work__title}>Навыки</h2>
                <div className={styles.work__items_box}>

                    <div className={styles.work__media}>
                        <div className={styles.work__object}>
                            <div className={styles.work__laptop}></div>
                        </div>
                        <div className={styles.work__media_body}>
                            <h3 className={styles.work__media_heading}>Отзывчивый дизайн</h3>
                            <p className={styles.work__media_content}>Адаптивная верстка для удобства использования на мобильных устройствах.</p>
                        </div>
                    </div>

                    <div className={styles.work__media}>
                        <div className={styles.work__object}>
                            <div className={styles.work__optimal}></div>
                        </div>
                        <div className={styles.work__media_body}>
                            <h3 className={styles.work__media_heading}>Оптимизация</h3>
                            <p className={styles.work__media_content}>Опыт оптимизации веб-приложений и сайтов для достижения быстрой загрузки.</p>
                        </div>
                    </div>

                    <div className={styles.work__media}>
                        <div className={styles.work__object}>
                            <div className={styles.work__plugin}></div>
                        </div>
                        <div className={styles.work__media_body}>
                            <h3 className={styles.work__media_heading}>JavaScript и фреймворки</h3>
                            <p className={styles.work__media_content}>Добавляет интерактивности и динамического поведения для веб-приложений</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work;