import styles from "./Portfolio.module.css";

const Portfolio = () => {
    return (
        <div id="portfolio" className={styles.portfolio__section}>
            <h2>ПОРТФОЛИО</h2>
            <div className={styles.portfolio__grid}>
                <div className={styles.portfolio__grid_item}></div>
                <div className={styles.portfolio__grid_item}></div>
                <div className={styles.portfolio__grid_item}></div>
                <div className={styles.portfolio__grid_item}></div>
                <div className={styles.portfolio__grid_item}></div>
            </div>
        </div>
    )
}

export default Portfolio;