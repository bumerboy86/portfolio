import styles from "./Work.module.css";

const Work = () => {
    return (
        <div id="work" className={styles.worl__section}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow bounce">
                        <h2>WHAT I DO</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media">
                            <div className="media-object media-left">
                                <i className="fa fa-laptop"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">Responsive Mobile</h3>
                                <p>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media">
                            <div className="media-object media-left">
                                <i className="fa fa-link"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">CSS Templates</h3>
                                <p>We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media">
                            <div className="media-object media-left">
                                <i className="fa fa-paper-plane"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">UI &AMP; UX Design</h3>
                                <p>Credits go to <a rel="nofollow" href="https://pixabay.com">Pixabay</a> and <a rel="nofollow" href="http://unsplash.com">Unsplash</a> for images used in this free CSS website template.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work;