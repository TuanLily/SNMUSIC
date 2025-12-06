import footerBg from "@/client/assets/img/footer-bg.png";

const Footer = () => {
    return (
        <footer
            className="footer footer--normal spad"
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="container">
                <div className="row">

                    {/* LEFT SECTION */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer__address">
                            <ul>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <p>Phone</p>
                                    <h6>1-677-124-44227</h6>
                                </li>

                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <p>Email</p>
                                    <h6>DJ.Music@gmail.com</h6>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* SOCIAL SECTION */}
                    <div className="col-lg-4 offset-lg-1 col-md-6">
                        <div className="footer__social">
                            <h2>DJoz</h2>

                            <div className="footer__social__links">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="col-lg-3 offset-lg-1 col-md-6">
                        <div className="footer__newslatter">
                            <h4>Stay With me</h4>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Email" />
                                <button type="submit">
                                    <i className="fa fa-send-o"></i>
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
