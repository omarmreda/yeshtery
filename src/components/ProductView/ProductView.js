import './ProductView.scss'
import React, { Component } from 'react'
import { ReactComponent as AdidasLogo } from '../../images/Group-346.svg'
import { ReactComponent as YellowStar } from '../../images/Path-368.svg'
import { ReactComponent as GrayStar } from '../../images/Path-369.svg'
export default class ProductView extends Component {
    render() {
        const { onAddToCart } = this.props
        return (
            <section className="product-view">
                <div className="images-container">
                    <div className="product-main-image-container">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/Group-333@2x.png'
                            }
                            alt="side"
                            className="product-main-image"
                        />
                        <div className="rotate-container">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/images/Group-338@2x.png'
                                }
                                alt="rotate"
                                className="rotate"
                            />
                        </div>
                    </div>
                    <div className="row-images">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/Path-347@2x.png'
                            }
                            alt="left arrow"
                            className="arrow-left"
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL + '/images/Group-333.png'
                            }
                            alt="front"
                            className="front"
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL + '/images/Group-331.png'
                            }
                            alt="back"
                            className="back"
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL + '/images/Group-329.png'
                            }
                            alt="side"
                            className="side"
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL + '/images/Group-335.png'
                            }
                            alt="tshirt"
                            className="tshirt"
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/Path-346@2x.png'
                            }
                            alt=""
                            className="arrow-right"
                        />
                    </div>
                </div>
                <div className="details-container">
                    <div className="adidas-logo2">
                        <AdidasLogo />
                    </div>
                    <h3 className="product-description">
                        Adidas black t-shirt lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                    </h3>
                    <h4 className="category">Men</h4>
                    <div className="rate">
                        <div>
                            <YellowStar className="yellow" />
                            <YellowStar className="yellow" />
                            <YellowStar className="yellow" />
                            <YellowStar className="yellow" />
                            <GrayStar className="gray" />
                        </div>
                        <span className="rate-out-of-5">4.9 of 5</span>
                        <span className="number-of-rates">22 Rates</span>
                    </div>
                    <div className="price-details">
                        <span className="blue-price">9,999 LE</span>
                        <span className="gray-price">9,999 LE</span>
                        <span className="sale-bar">30% Off</span>
                    </div>
                    <hr className="product-hr" />
                    <h5 className="size">Size</h5>
                    <ul className="sizes">
                        <li>Small</li>
                        <li>Medium</li>
                        <li className="selected-size">Large</li>
                        <li>X-Large</li>
                        <li>XX Large</li>
                    </ul>
                    <hr className="product-hr" />
                    <h5 className="color">Color</h5>
                    <div className="color-choices">
                        <img
                            src={
                                process.env.PUBLIC_URL + '/images/Group-354.png'
                            }
                            alt="color"
                            className="selected-color"
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL + '/images/Group-356.png'
                            }
                            alt="color"
                            className="color-choice"
                        />
                    </div>
                    <hr className="product-hr" />
                    <h5 className="quantity">Quantity</h5>
                    <div className="quantity-bar">
                        <button className="decrement">-</button>
                        <span>1</span>
                        <button className="increment">+</button>
                    </div>
                    <div className="buttons">
                        <button
                            className="add-to-cart-button"
                            onClick={onAddToCart}
                        >
                            Add To Cart
                        </button>
                        <button className="pickup-button">
                            Pickup From Store
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}
