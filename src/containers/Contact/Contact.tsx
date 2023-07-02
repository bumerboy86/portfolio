import styles from "./Contact.module.css";
import Footer from "../Footer/Footer.tsx";

const Contact = () => {
    function openGmailCompose():void {
        const email:string = "bumerboy86@gmail.com";
        const subject:string = encodeURIComponent("Тема письма");
        const body:string = encodeURIComponent("Текст письма");

        const gmailComposeUrl:string = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + subject + "&body=" + body;
        window.open(gmailComposeUrl);
    }

    function isMobile() {
        const userAgent:string = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }

    return (
        <div id={"contact"} className={styles.contact__section}>
            <address>
                <p className={styles.contact__title}>Связаться со мной</p>
                <div className={styles.contact__media}>
                    <div className={styles.contact__icon_box}>
                        {isMobile() ?
                            <a href="tel:+77076467573" className={styles.contact__icon_phone}></a> :
                            <div className={styles.contact__icon_phone}></div>
                        }
                    </div>
                    {isMobile() ?
                        <a href="tel:+77076467573" className={styles.contact__media_content}>+7(707)-646-75-73</a> :
                        <p className={styles.contact__media_content}>+7(707)-646-75-73</p>
                    }

                </div>
                <div className={styles.contact__media}>
                    <div className={styles.contact__icon_box}>
                        <a href="#" onClick={openGmailCompose} target={"_blank"} className={styles.contact__icon_message}></a>
                    </div>
                    <a href="#" onClick={openGmailCompose} target={"_blank"} className={styles.contact__media_content}>bumerboy86@gmail.com</a>
                </div>
                <div className={styles.contact__media}>
                    <div className={styles.contact__icon_box}>
                        <a href="https://t.me/bumerboy86" className={styles.contact__icon_telegram}></a>
                    </div>
                    <a href="https://t.me/bumerboy86" className={styles.contact__media_content}>@bumerboy86</a>
                </div>
                <div className={styles.contact__media}>
                    <div className={styles.contact__icon_box}>
                        <a href="https://wa.me/77076467573" className={styles.contact__icon_whatsapp}></a>
                    </div>
                    <a href="https://wa.me/77076467573" className={styles.contact__media_content}>+7(707)-646-75-73</a>
                </div>
                <div className={styles.contact__media}>
                    <div className={styles.contact__icon_box}>
                        <div className={styles.contact__icon_location}></div>
                    </div>
                    <p className={styles.contact__media_content}>Казахстан, г.Алматы</p>
                </div>
            </address>
            <Footer />
        </div>
    )
}

export default Contact;