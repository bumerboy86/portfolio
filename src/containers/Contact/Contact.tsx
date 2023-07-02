import styles from "./Contact.module.css";

const Contact = () => {
    function openGmailCompose():void {
        const email:string = "bumerboy86@gmail.com";
        const subject:string = encodeURIComponent("Тема письма");
        const body:string = encodeURIComponent("Текст письма");

        const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + subject + "&body=" + body;
        window.open(gmailComposeUrl);
    }
    return (
        <div className={styles.contact__section}>
            <div className={styles.contact__container}>
                <address className={styles.contact__info_box}>
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
                        <p className={styles.contact__media_content}>РК, г. Алматы</p>
                    </div>
                </address>
                <div className={styles.contact__form}>

                </div>
            </div>
        </div>
    )
}

export default Contact;