import './ProductView.scss'

import { ReactComponent as LeftArrow } from '../../images/Path-347.svg'
import { ReactComponent as RightArrow } from '../../images/Path-346.svg'
import { ReactComponent as AdidasLogo } from '../../images/Group-346.svg'
import { ReactComponent as YellowStar } from '../../images/Path-368.svg'
import { ReactComponent as GrayStar } from '../../images/Path-369.svg'
export default function ProductView() {
    return (
        <div className="product-view">
            <div className="images-container">
                <div className="product-main-image"></div>
                <LeftArrow className="left-arrow" />
                <img
                    src={process.env.PUBLIC_URL + '/images/Group-333.png'}
                    alt=""
                    className="front"
                />
                <img
                    src={process.env.PUBLIC_URL + '/images/Group-331.png'}
                    alt=""
                    className="back"
                />
                <img
                    src={process.env.PUBLIC_URL + '/images/Group-329.png'}
                    alt="side"
                />
                <img
                    src={process.env.PUBLIC_URL + '/images/Group-335.png'}
                    alt="tshirt"
                />
                <RightArrow className="right-arrow" />
            </div>
            <div className="details-container">
                <div className="adidas-logo">
                    <AdidasLogo />
                </div>
                <h3>
                    Adidas black t-shirt lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit.
                </h3>
                <h4>Men</h4>
                <div>
                    <YellowStar />
                    <YellowStar />
                    <YellowStar />
                    <YellowStar />
                    <GrayStar className="gray" />
                    <span>4.9 of 5</span>
                    <span>22 Rates</span>
                </div>
                <div>
                    <span>9,999 LE</span>
                    <span>9,999 LE</span>
                    <span>30% Off</span>
                </div>
                <h5>Size</h5>
                <ul className="sizes">
                    <li>Small</li>
                    <li>Medium</li>
                    <li>Large</li>
                    <li>X-Large</li>
                    <li>XX Large</li>
                </ul>
                <h5>Color</h5>

                <h5>Quantity</h5>
                <div className="quantity-bar">
                    <button className="increment">+</button>
                    <span>1</span>
                    <button className="decrement">-</button>
                </div>
                <button className="add-to-cart-button">Add To Cart</button>
                <button>Pickup From Store</button>
            </div>
        </div>
    )
}
