import styles from "./Navigator.module.css";
import {useEffect, useRef} from "react";

const Navigator = () => {
    const workRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        workRef.current = document.getElementById('work');
        aboutRef.current = document.getElementById('about');
    }, []);

    const handleScrollToHome = ():void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleScrollToWork = ():void => {
        workRef.current && workRef.current!.scrollIntoView({behavior: 'smooth'});
    };
    const handleScrollToAbout = ():void => {
        aboutRef.current && aboutRef.current!.scrollIntoView({behavior: 'smooth'});
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
