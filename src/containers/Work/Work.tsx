import styles from "./Work.module.css";
import {RefObject} from "react";

type TWorkProps = {
    element: RefObject<HTMLDivElement | null>;
}
const Work = (props: TWorkProps) => {
    return (
        <div id="work" ref={props.element} className={styles.work__section}>
            <div className={styles.work__container}>
                <h2 className={styles.work__title}>Что я делаю</h2>
                <div className={styles.work__items_box}>

                    <div className={styles.work__media}>
                        <div className={styles.work__object}>
                            <div className={styles.work__laptop}></div>
                        </div>
                        <div className={styles.work__media_body}>
                            <h3 className={styles.work__media_heading}>Мобильная адаптация</h3>
                            <p className={styles.work__media_content}>Верстаю сайт под все разрешения.</p>
                        </div>
                    </div>

                    <div className={styles.work__media}>
                        <div className={styles.work__object}>
                            <div className={styles.work__optimal}></div>
                        </div>
                        <div className={styles.work__media_body}>
                            <h3 className={styles.work__media_heading}>Ускорение приложений</h3>
                            <p className={styles.work__media_content}>Уменьшаю скорость загрузки сайта.</p>
                        </div>
                    </div>

                    <div className={styles.work__media}>
                        <div className={styles.work__object}>
                            <div className={styles.work__plugin}></div>
                        </div>
                        <div className={styles.work__media_body}>
                            <h3 className={styles.work__media_heading}>JavaScript и фреймворки</h3>
                            <p className={styles.work__media_content}>Пишу скрипты для автоматизации процессов и анимации на сайте.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work;