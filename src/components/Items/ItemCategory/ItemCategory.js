import "./ItemCategoryStyles.css";
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getByCategory} from "../../../services/ProductService";
import ProductItem from "../../ProductItem/ProductItem";

const ItemCategory = () => {
    const [items, setItems] = useState(null)
    const params = useParams()

    useEffect(() => {
        getByCategory(params.category)
            .then(r => {
                console.log(r)
                setItems(r.data)
            })
            .catch(e => console.log("Error: " + e))
    }, [])

    return (
        <div>
            <h1 className="header"> Categoría de {params.category}</h1>
            {items != null ? (
                items.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))
            ) : ('no hay productos')}
        </div>
    )
}

export default ItemCategory