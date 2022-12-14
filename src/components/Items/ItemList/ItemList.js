import "./ProductListStyles.css";
import React, {useEffect, useState} from 'react'
import {getAllProducts} from "../../../services/ProductService";
import ProductItem from "../../ProductItem/ProductItem";

const ItemList = () => {
    const [productList, setProductList] = useState(null)

    useEffect(() => {
        getAllProducts()
            .then(r => {
                console.log(r)
                setProductList(r.data)
            })
            .catch(e => console.log("Error: " + e))
    }, [])

    return (
        <div className="pl1">
            <ul className="pl2">
                {productList != null ? (
                    productList.map(product => (
                        <li className="pl3">
                            <ProductItem key={product.id} product={product}/>
                        </li>
                    ))
                ) : ('no hay productos')}
            </ul>
        </div>
    )
}

export default ItemList