import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <p>© 2023 Website. All rights reserved</p>
            <div className={styles.footer__line}/>
        </footer>
    )
}

export default Footer;