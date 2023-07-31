import styles from "./Navigator.module.css";
import {MutableRefObject, useEffect, useRef} from "react";

const Navigator = () => {
    const workRef:MutableRefObject<HTMLElement | null>  = useRef(null);
    const aboutRef:MutableRefObject<HTMLElement | null>  = useRef(null);
    const portfolioRef:MutableRefObject<HTMLElement | null>  = useRef(null);
    const contactRef: MutableRefObject<HTMLElement | null> = useRef(null);

    useEffect(() => {
        workRef.current = document.getElementById("work");
        aboutRef.current = document.getElementById("about");
        portfolioRef.current = document.getElementById("portfolio");
        contactRef.current = document.getElementById("contact");
    }, []);

    const handleScrollToHome = ():void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handleScrollToWork = ():void => {
        workRef.current && workRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const handleScrollToAbout = ():void => {
        aboutRef.current && aboutRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const handleScrollToPortfolio = ():void => {
        aboutRef.current && portfolioRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const handleScrollToContact = (): void => {
        contactRef.current && contactRef.current?.scrollIntoView({behavior: "smooth"});
    }
    return (
        <div className={styles.navigator}>
            <a
                className={styles.navigator__items}
                onClick={handleScrollToHome}
                data-wow-delay="1s"
                title="home"
            ></a>
            <a
                className={styles.navigator__items}
                onClick={handleScrollToWork}
                data-wow-delay="1s"
                title="work"
            ></a>
            <a
                className={styles.navigator__items}
                onClick={handleScrollToAbout}
                data-wow-delay="1s"
                title="about"
            ></a>
            <a
                className={styles.navigator__items}
                onClick={handleScrollToPortfolio}
                data-wow-delay="1s"
                title="portfolio"
            ></a>
            <a
                className={styles.navigator__items}
                onClick={handleScrollToContact}
                data-wow-delay="1s"
                title="contact"
            ></a>
        </div>
    )
}

export default Navigator;
