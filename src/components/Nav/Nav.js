import './Nav.scss'

export default function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-icons">
                <li>Men</li>
                <li>Women</li>
                <li>Unisex</li>
                <li>Kids</li>
                <li>Best sellers</li>
                <li>New Arrivals</li>
                <li className="selected">Offers</li>
            </ul>
        </nav>
    )
}
