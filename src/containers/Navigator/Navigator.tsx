import styles from "./Navigator.module.css";

const Navigator = () => {
    const home:HTMLElement | null = document.getElementById("home");
    const work:HTMLElement | null = document.getElementById("work");
    const about:HTMLElement | null = document.getElementById("about");
    const handleClick = (data:HTMLElement):void => {
        data && data.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className={styles.navigator}>
            <div
                className={styles.navigator__items}
                data-tooltip="Home"
                onClick={() => handleClick(home)}></div>
            <div
                className={styles.navigator__items}
                data-tooltip="Work"
                onClick={() => handleClick(work)}></div>
            <div
                className={styles.navigator__items}
                data-tooltip="About"
                onClick={() => handleClick(about)}></div>
            {/*<div */}
            {/*    className={styles.navigator__items}*/}
            {/*    data-tooltip="Portfolio" */}
            {/*    onClick={() => handleClick()}></div>*/}
            {/*<div */}
            {/*    className={styles.navigator__items}*/}
            {/*    data-tooltip="Contact" */}
            {/*    onClick={() => handleClick()}></div>*/}
        </div>
    )
}

export default Navigator;
