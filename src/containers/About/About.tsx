import styles from "./About.module.css";
import ProgressItem from "../../components/ProgressItem/ProgressItem.tsx";

const About =() => {
    return (
        <div id="about" className={styles.about__section}>
            <div className={styles.about__container}>
                <div className={styles.about__content}>
                    <h2>ОБО МНЕ</h2>
                    <h4 className={styles.about__title_text}>Воронов Руслан Булатович</h4>
                    <p className={styles.about__text_inf}>Занимаюсь веб-разработкой, стремлюсь создавать эффективные и интуитивно понятные веб-приложения.</p>
                </div>
                <div className={styles.about__progress_box}>
                    <ProgressItem text={"JavaScript, TypeScript"} num={100} />
                    <ProgressItem text={"NodeJS, Rest Api"} num={99} />
                    <ProgressItem text={"HTML5 CSS3"} num={98} />
                    <ProgressItem text={"PostgresSQL, MongoDB, FireBase"} num={87} />
                    <ProgressItem text={"Git, GitHub, GitLab, Docker"} num={95} />
                    <ProgressItem text={"Linux, Windows"} num={100} />
                </div>
            </div>
        </div>
    )
};

export default About;