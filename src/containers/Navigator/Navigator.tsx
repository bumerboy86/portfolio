import styles from "./Navigator.module.css";

const Navigator = () => {
    const work:HTMLElement = document.getElementById("work")!;
    const about:HTMLElement = document.getElementById("about")!;
    const handleScrollToHome = ():void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleScrollToWork = ():void => {
        work && work.scrollIntoView({behavior: 'smooth'});
    };
    const handleScrollToAbout = ():void => {
        about && about.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <div className={styles.navigator}>
            <a
                className={styles.navigator__items}
                onClick={handleScrollToHome}
                data-wow-delay="1s"
            ></a>
            <a
                className={styles.navigator__items}
                onClick={handleScrollToWork}
                data-wow-delay="1s"
            ></a>
            <a
                className={styles.navigator__items}
                onClick={handleScrollToAbout}
                data-wow-delay="1s"
            ></a>
        </div>
    )
}

export default Navigator;
