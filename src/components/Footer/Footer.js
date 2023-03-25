import './Footer.scss'
import { ReactComponent as LogoYellow } from '../../images/Group-1436.svg'
import { ReactComponent as Subcribe } from '../../images/Group-1431.svg'
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="upper-section">
                    <div className="left-section">
                        <LogoYellow />
                        <p className="footer-paragraph">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, ea commodo consequat.
                            <br /> <br /> Duis autem vel eum iriure dolor in
                            hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla. Lorem
                            ipsum dolor sit amet.
                            <br /> <br />
                            Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="right-section">
                        <p className="subscribe">Subscribe to our newsletter</p>
                        <form className="email-form">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Mail"
                                className="email-input"
                            />
                            <button className="subscribe-button">
                                Subscribe
                                <Subcribe />
                            </button>
                        </form>

                        <div className="row">
                            <ul className="right-icons">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Track Order</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Sell with Us</li>
                                <li>Shippings And Returns</li>
                            </ul>
                            <div className="vertical-2"></div>
                            <ul className="social-icons">
                                <li>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/Group-1432.png'
                                        }
                                        alt="Facebook"
                                    />
                                    /YESHTERY
                                </li>
                                <li>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/Group-1435.png'
                                        }
                                        alt="Linkedin"
                                    />
                                    /YESHTERY
                                </li>
                                <li>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/Group-1433.png'
                                        }
                                        alt="Instagram"
                                    />
                                    /YESHTERY
                                </li>
                                <li>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/Group-1434.png'
                                        }
                                        alt="Twitter"
                                    />
                                    /YESHTERY
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="hr" />

                <div className="copyrights-section">
                    <p>&copy; 2021 yeshtery,all rights reserved.</p>
                    <div className="payment-methods">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/Rectangle-586.png'
                            }
                            alt="Cash"
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/Group-1437.png'
                            }
                            alt="Visa"
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/Group-1438.png'
                            }
                            alt="Master Card"
                        />
                    </div>
                    <p className="nasnav">
                        Powered By
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/Group-1439.png'
                            }
                            alt="Nasnav"
                        />
                    </p>
                </div>
            </div>
        </footer>
    )
}
