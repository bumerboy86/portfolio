import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <p>© 2023 Website. All rights reserved. Посетить <a href={"https://github.com/bumerboy86"} target={"_blank"} className={styles.footer__link}>GitHub</a></p>
            <div className={styles.footer__line}/>
            <ul className={styles.footer__ul}>
                <li><a href="https://t.me/bumerboy86" className={styles.footer__social_gramm} target={"_blank"}></a></li>
                <li><a href="https://wa.me/77076467573" target={"_blank"} className={styles.footer__social_whats_app}></a></li>
            </ul>
        </footer>
    )
}

export default Footer;