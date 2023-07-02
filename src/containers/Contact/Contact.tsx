import styles from "./Contact.module.css";

const Contact = () => {
    function openGmailCompose():void {
        const email:string = "bumerboy86@gmail.com";
        const subject:string = encodeURIComponent("Тема письма");
        const body:string = encodeURIComponent("Текст письма");

        const gmailComposeUrl:string = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + subject + "&body=" + body;
        window.open(gmailComposeUrl);
    }
    return (
        <div id={"contact"} className={styles.contact__section}>
            <address>
                <p className={styles.contact__title}>Связаться со мной</p>
                <div className={styles.contact__media}>
                    <div className={styles.contact__icon_box}>
                        <a href="tel:+77076467573" target={"_blank"} className={styles.contact__icon_phone}></a>
                    </div>
                    <p className={styles.contact__media_content}>+7(707)-646-75-73</p>
                </div>
                <div className={styles.contact__media}>
                    <div className={styles.contact__icon_box}>
                        <a href="#" onClick={openGmailCompose} target={"_blank"} className={styles.contact__icon_message}></a>
                    </div>
                    <p className={styles.contact__media_content}>bumerboy86@gmail.com</p>
                </div>
                <div className={styles.contact__media}>
                    <div className={styles.contact__icon_box}>
                        <div className={styles.contact__icon_location}></div>
                    </div>
                    <p className={styles.contact__media_content}>Казахстан, г.Алматы</p>
                </div>
            </address>
        </div>
    )
}

export default Contact;