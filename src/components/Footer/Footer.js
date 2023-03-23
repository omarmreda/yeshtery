import './Footer.scss'
import { ReactComponent as LogoYellow } from '../../images/Group-1436.svg'
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
                            laoreet dolore magna aliquam erat volutpat.
                            <br /> <br />
                            Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut aliquip
                            ex ea commodo consequat. Duis autem vel eum iriure
                            dolor in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla. Lorem
                            ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed dia
                            <br /> <br />m nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis
                        </p>
                    </div>
                    <div className="right-section">
                        <p className="subscribe">Subscribe to our newsletter</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Mail"
                            className="email-input"
                        />
                        <ul className="right-icons">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Track Order</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Sell with Us</li>
                            <li>Shippings And Returns</li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div>&copy; 2021 yeshtery,all rights reserved.</div>
            </div>
        </footer>
    )
}
