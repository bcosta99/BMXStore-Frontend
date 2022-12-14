import "./ProductStyles.css";
import {useState} from "react";
import {Link} from "react-router-dom";

const ProductItem = (props) => {
    const [product, setProduct] = useState(props.product)

    return (
        <div className="product">
            <Link to={"/products/" + product.id}>
                <div className="productimg">
                </div>
                <p className="name">{product.name} </p>
                <p className="category">{product.category} </p>
                <p className="price">{product.price}$ </p>
            </Link>
        </div>
    )
}
export default ProductItem