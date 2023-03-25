import './Menu.scss'
import { ReactComponent as SearchIcon } from '../../images/Path-774.svg'
import { ReactComponent as AdidasLogo } from '../../images/Group-745.svg'
import { ReactComponent as CartIcon } from '../../images/Path-772.svg'
import { ReactComponent as Wishlist } from '../../images/Path-771.svg'
import { ReactComponent as Login } from '../../images/Path-773.svg'
import React, { Component } from 'react'
import Cart from '../Cart/Cart'
export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showCart: false
        }

        this.handleCartClick = this.handleCartClick.bind(this)
    }

    handleCartClick() {
        this.setState((prevState) => ({
            showCart: !prevState.showCart
        }))
    }
    render() {
        const { cartCount } = this.props
        return (
            <header className="menu">
                <form className="search-input">
                    <SearchIcon className="search-icon" />
                    <input
                        type="search"
                        className="input"
                        placeholder="Search"
                    />
                </form>
                <AdidasLogo className="adidas-logo-in-menu" />
                <ul className="menu-icons">
                    <li
                        onClick={this.handleCartClick}
                        className="cart-icon-container"
                    >
                        <CartIcon className="cart-icon" />
                        <div className="count-in-cart">{cartCount}</div>
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
                {this.state.showCart && (
                    <Cart
                        onClick={this.handleCartClick}
                        cartCount={cartCount}
                    />
                )}
            </header>
        )
    }
}
