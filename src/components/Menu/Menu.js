import './Menu.scss'
import { ReactComponent as SearchIcon } from '../../images/Path-774.svg'
import { ReactComponent as AdidasLogo } from '../../images/Group-745.svg'
import { ReactComponent as Cart } from '../../images/Path-772.svg'
import { ReactComponent as Wishlist } from '../../images/Path-771.svg'
import { ReactComponent as Login } from '../../images/Path-773.svg'
export default function Menu() {
    return (
        <header className="menu">
            <form className="search-input">
                <SearchIcon className="search-icon" />
                <input type="search" className="input" placeholder="Search" />
            </form>
            <AdidasLogo className="adidas-logo" />
            <ul className="menu-icons">
                <li>
                    <Cart className="menu-icon" />
                    Cart
                </li>
                <li>
                    <Wishlist className="menu-icon" />
                    Wishlist
                </li>
                <li>
                    <Login className="menu-icon" />
                    Login
                </li>
            </ul>
        </header>
    )
}
