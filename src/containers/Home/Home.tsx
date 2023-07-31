import styles from "./Home.module.css";
import {useEffect, useState} from "react";

const Home = () => {
    const portfolio:HTMLElement | null = document.getElementById("portfolio");
    const [words] = useState<string[]>([
        'JAVASCRIPT, TYPESCRIPT',
        'REACT, VUE3, VITE',
        'POSTGRES, MONGO-DB',
        'CSS3, HTML5',
        'REST API, CI-CD'
    ]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const handleScrollToPortfolio = ():void => {
        portfolio && portfolio.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        const interval:number = setInterval(():void => {
            setCurrentWordIndex((prevIndex:number) => (prevIndex + 1) % words.length);
        }, 2800);
        return () => clearInterval(interval);
    }, [words]);

    return (
        <div id="home" className={styles.home__section}>
            <div className={styles.container}>
                <h1 className={styles.home__title}>Frontend Developer</h1>
                <h2 className={styles.home__rotate}>
                    <span>{words[currentWordIndex]}</span>
                </h2>
                <p className={styles.home__content}>Специализируюсь на создании пользовательских интерфейсов.</p>
            </div>
            <a onClick={handleScrollToPortfolio} className={styles.home__btn}>Посмотреть портфолио</a>
        </div>
    )
}

export default Home;