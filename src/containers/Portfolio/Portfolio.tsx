import styles from "./Portfolio.module.css";
import creativeImg from "../../assets/works/creative.png";
import marketImg from  "../../assets/works/e-market.png";
import parallaxImg from "../../assets/works/parallax.png";
import testImg from "../../assets/works/test.png";
import zabotik from "../../assets/works/zabotik.png";
import tiktak from "../../assets/works/tiktak.png";

const Portfolio = () => {
    return (
        <div id="portfolio" className={styles.portfolio__section}>
            <h2>ПОРТФОЛИО</h2>
            <div className={styles.portfolio__grid}>
                <div className={styles.portfolio__grid_item}>
                    <img className={styles.portfolio__image} src={zabotik} alt="zabotik img5" />
                    <a href={"http://zabotik.kz/"} target={"_blank"} rel="noopener noreferrer" className={styles.portfolio__overlay}>
                        <h4>Заботик</h4>
                        <h5>Мед сервис</h5>
                        <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
                    </a>
                </div>
                <div className={styles.portfolio__grid_item}>
                    <img className={styles.portfolio__image} src={creativeImg} alt="portfolio img1" />
                    <a href={"https://bumerboy86.github.io/creative/"} target={"_blank"} rel="noopener noreferrer" className={styles.portfolio__overlay}>
                        <h4>Creative</h4>
                        <h5>Сайт с необычным дизайном</h5>
                        <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
                    </a>
                </div>
                <div className={styles.portfolio__grid_item}>
                    <img className={styles.portfolio__image} src={marketImg} alt="portfolio img2" />
                    <a href={"https://bumerboy86.github.io/catalog/"} target={"_blank"} rel="noopener noreferrer" className={styles.portfolio__overlay}>
                        <h4>E-Catalog</h4>
                        <h5>Онлайн магазин на Vue3</h5>
                        <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
                    </a>
                </div>
                <div className={styles.portfolio__grid_item}>
                    <img className={styles.portfolio__image} src={parallaxImg} alt="portfolio img3" />
                    <a href={"https://bumerboy86.github.io/parallax/"} target={"_blank"} rel="noopener noreferrer" className={styles.portfolio__overlay}>
                        <h4>Parallax</h4>
                        <h5>Сайт с эффектом параллакс</h5>
                        <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
                    </a>
                </div>
                <div className={styles.portfolio__grid_item}>
                    <img className={styles.portfolio__image} src={testImg} alt="portfolio img4" />
                    <a href={"https://bumerboy86.github.io/geekbrains/"} target={"_blank"} rel="noopener noreferrer" className={styles.portfolio__overlay}>
                        <h4>Test for GB</h4>
                        <h5>Вопрос ответ тесты на Vue3</h5>
                        <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
                    </a>
                </div>
                <div className={styles.portfolio__grid_item}>
                    <img className={styles.portfolio__image} src={tiktak} alt="portfolio img6" />
                    <a href={"https://bumerboy86.github.io/tik-tac-toe/"} target={"_blank"} rel="noopener noreferrer" className={styles.portfolio__overlay}>
                        <h4>Tik-tak-toe</h4>
                        <h5>Игра крестики нолики</h5>
                        <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
                    </a>
                </div>
            </div>
            <a href={"https://github.com/bumerboy86"} className={styles.portfolio__btn} target={"_blank"}>Посмотреть на GitHub</a>
        </div>
    )
}

export default Portfolio;