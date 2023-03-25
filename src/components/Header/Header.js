import './Header.scss'
import { ReactComponent as HabmurgerMenu } from '../../images/Group-770.svg'
import { ReactComponent as Contact } from '../../images/Group-756.svg'
import { ReactComponent as TrackOrder } from '../../images/Group-758.svg'
import { ReactComponent as Location } from '../../images/Group-753.svg'
import { ReactComponent as LeftArrow } from '../../images/Path-797.svg'
import { ReactComponent as RightArrow } from '../../images/Path-796.svg'
export default function Header() {
    return (
        <header className="header">
            <HabmurgerMenu className="hamburger" />
            <img
                src={process.env.PUBLIC_URL + '/images/Group-769.png'}
                className="header-logo"
                alt="logo"
            />
            <LeftArrow className="left-arrow" />
            <p className="header-paragraph">
                Valentine’s Day Offers! Buy Two Get One Free{' '}
                <span className="shop-now">Shop Now</span>
            </p>
            <RightArrow className="right-arrow" />
            <ul className="header-icons">
                <li>
                    <Contact className="icon-svg" />
                    Contact Us
                </li>
                <li>
                    <TrackOrder className="icon-svg" />
                    Track Order
                </li>
                <li>
                    <Location className="icon-svg" />
                    Find A store
                </li>
            </ul>
        </header>
    )
}
