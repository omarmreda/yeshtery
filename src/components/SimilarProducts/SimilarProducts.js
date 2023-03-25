import ProductItem from '../ProductItem/ProductItem'
import './SimilarProducts.scss'

export default function SimilarProducts({ data }) {
    return (
        <section className="similar-products">
            <h4 className="similar-header">Similar Products</h4>
            <p className="may-like">You may like these products</p>
            <div className="product-items-container">
                {data.map((item) => (
                    <ProductItem
                        imgUrl={item.imgUrl}
                        description={item.description}
                        price={item.price}
                        rate={item.rate}
                        salePercent={item.salePercent}
                        oldPrice={item.oldPrice}
                        pickupPlace={item.pickupPlace}
                    />
                ))}
            </div>
        </section>
    )
}
