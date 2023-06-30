import styles from "./Navigator.module.css";

type TNavigatorProps = {
    goHome: () => void;
    goWork: () => void;
    goAbout: () => void;
}
const Navigator = (props: TNavigatorProps) => {
    return (
        <div className={styles.navigator}>
            <a
                className={styles.navigator__items}
                title="Home"
                onClick={props.goHome}
                data-wow-delay="1s"
            ></a>
            <a
                className={styles.navigator__items}
                title="Work"
                onClick={props.goWork}
                data-wow-delay="1s"
            ></a>
            <a
                className={styles.navigator__items}
                title="About"
                onClick={props.goAbout}
                data-wow-delay="1s"
            ></a>
        </div>
    )
}

export default Navigator;
