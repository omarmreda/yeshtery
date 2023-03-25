import './ProductItem.scss'
import { ReactComponent as YellowStar } from '../../images/Path-368.svg'
import { ReactComponent as AdidasLogoInProduct } from '../../images/Group-346.svg'
import { ReactComponent as GrayStar } from '../../images/Path-369.svg'
export default function ProductItem({
    imgUrl,
    description,
    price,
    oldPrice,
    salePercent,
    rate,
    pickupPlace
}) {
    return (
        <div className="item">
            <div className="product-picture-container">
                <img
                    src={process.env.PUBLIC_URL + imgUrl}
                    alt="product"
                    className="product-main-image"
                />
                <div className="product-rotate-container">
                    <img
                        src={process.env.PUBLIC_URL + '/images/Group-338.png'}
                        alt="product"
                        className="product-rotate"
                    />
                </div>
            </div>
            <h6 className="product-title">{description}</h6>
            <div className="one-row">
                <div className="details-of-price">
                    <div className="main-price">{price}</div>
                    <div
                        className="discount-info"
                        style={{
                            visibility: salePercent ? 'visible' : 'hidden'
                        }}
                    >
                        <span className="discount-price">{oldPrice}</span>
                        <span className="discount-ratio">{salePercent}</span>
                    </div>
                </div>
                <AdidasLogoInProduct className="adidas-in-product" />
            </div>
            <div className="rating-in-product">
                <div>
                    <YellowStar className="star-rate" />
                    <YellowStar className="star-rate" />
                    <YellowStar className="star-rate" />
                    <YellowStar className="star-rate" />
                    <GrayStar className="gray-star" />
                </div>
                <span className="rating-in-number">{rate}</span>
            </div>
            <div className="pickup-place">
                Pickup From: <span className="placeOfPick">{pickupPlace}</span>
            </div>
        </div>
    )
}
