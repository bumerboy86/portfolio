import styles from "./ProgressItem.module.css";

const ProgressItem = (props: {text: string, num: number}) => {
    return (
        <>
            <span className={styles.progress__text}>{props.text}<small>{props.num}%</small></span>
            <div className={styles.progress_line}>
                <div className={styles.progress_line_secondary} style={{width: props.num + "%"}}></div>
            </div>
        </>
    )
}

export default ProgressItem;

