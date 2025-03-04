import styles from "./Portfolio.module.css";
import booking from "../../assets/works/booking.png";
// import marketImg from "../../assets/works/e-market.png";
import parallaxImg from "../../assets/works/parallax.png";
import testImg from "../../assets/works/test.png";
import wheel from "../../assets/works/wheel.png";
import tiktak from "../../assets/works/tiktak.png";
import clim from "../../assets/works/climate.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.portfolio__section}>
      <h2>ПОРТФОЛИО</h2>
      <div className={styles.portfolio__grid}>
        <div className={styles.portfolio__grid_item}>
          <img
            className={styles.portfolio__image}
            src={clim}
            alt="clomate img5"
          />
          <a
            href={"https://climate-master.kz/"}
            target={"_blank"}
            rel="noopener noreferrer"
            className={styles.portfolio__overlay}
          >
            <h4>climate-master</h4>
            <h5>Сервис по ремонту климатической техники</h5>
            <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
          </a>
        </div>
        <div className={styles.portfolio__grid_item}>
          <img
            className={styles.portfolio__image}
            src={booking}
            alt="portfolio img1"
          />
          <a
            href={"https://bookinghub.kz/"}
            target={"_blank"}
            rel="noopener noreferrer"
            className={styles.portfolio__overlay}
          >
            <h4>bookinghub</h4>
            <h5>Онлайн бронирование</h5>
            <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
          </a>
        </div>
        <div className={styles.portfolio__grid_item}>
          <img
            className={styles.portfolio__image}
            src={wheel}
            alt="portfolio img2"
          />
          <a
            href={"https://wheel-service.kz"}
            target={"_blank"}
            rel="noopener noreferrer"
            className={styles.portfolio__overlay}
          >
            <h4>Wheel-Service</h4>
            <h5>Шиномонтаж на выезд</h5>
            <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
          </a>
        </div>
        <div className={styles.portfolio__grid_item}>
          <img
            className={styles.portfolio__image}
            src={parallaxImg}
            alt="portfolio img3"
          />
          <a
            href={"https://bumerboy86.github.io/parallax/"}
            target={"_blank"}
            rel="noopener noreferrer"
            className={styles.portfolio__overlay}
          >
            <h4>Parallax</h4>
            <h5>Сайт с эффектом параллакс</h5>
            <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
          </a>
        </div>
        <div className={styles.portfolio__grid_item}>
          <img
            className={styles.portfolio__image}
            src={testImg}
            alt="portfolio img4"
          />
          <a
            href={"https://bumerboy86.github.io/geekbrains/"}
            target={"_blank"}
            rel="noopener noreferrer"
            className={styles.portfolio__overlay}
          >
            <h4>Test for GB</h4>
            <h5>Вопрос ответ тесты на Vue3</h5>
            <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
          </a>
        </div>
        <div className={styles.portfolio__grid_item}>
          <img
            className={styles.portfolio__image}
            src={tiktak}
            alt="portfolio img6"
          />
          <a
            href={"https://bumerboy86.github.io/tik-tac-toe/"}
            target={"_blank"}
            rel="noopener noreferrer"
            className={styles.portfolio__overlay}
          >
            <h4>Tik-tak-toe</h4>
            <h5>Игра крестики нолики</h5>
            <h5 className={styles.portfolio__forward}>перейти на сайт</h5>
          </a>
        </div>
      </div>
      <a
        href={"https://github.com/bumerboy86"}
        className={styles.portfolio__btn}
        target={"_blank"}
      >
        Посмотреть на GitHub
      </a>
    </div>
  );
};

export default Portfolio;
