import React, { Component } from 'react'
import './Cart.scss'
export default class Cart extends Component {
    render() {
        const { cartCount, onClick } = this.props
        if (cartCount > 0) {
            return (
                <div className="cart-popup">
                    <button className="close-button" onClick={onClick}>
                        X
                    </button>
                    <h2 className="cart-heading">My Cart</h2>
                    <h3 className="cart-summary">Cart Summary</h3>
                    <div className="cart-items">
                        <img
                            src={
                                process.env.PUBLIC_URL + '/images/Group-333.png'
                            }
                            alt="side"
                            className="product-img-cart"
                        />
                        <div className="product-data">
                            <p className="product-name-in-cart">
                                Lorem ipsum dolor sit amet, consecte adipiscing
                                elit.
                            </p>
                            <div className="flex-cart">
                                <div>
                                    <p className="quantity-in-cart">
                                        Quantity: {cartCount}
                                    </p>
                                    <p className="price-in-cart">9,999 LE</p>
                                </div>
                                <button className="remove-button">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="total">
                        Total : {(cartCount * 9999).toLocaleString()} LE
                    </p>
                    <div className="cart-buttons">
                        <button className="review-button">Review Cart</button>
                        <button className="checkout-button">
                            Complete Checkout
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cart-popup">
                    <button className="close-button" onClick={onClick}>
                        X
                    </button>
                    <h2 className="cart-heading">My Cart</h2>
                    <p className="empty-cart">The cart is currently empty!</p>
                    <button className="empty-button" onClick={onClick}>
                        Go back shopping
                    </button>
                </div>
            )
        }
    }
}
