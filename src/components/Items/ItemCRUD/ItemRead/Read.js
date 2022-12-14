import "./ReadStyles.css"
import React, {useEffect, useState} from 'react'
import {deleteById, getAllProducts} from "../../../../services/ProductService";
import ProductItem from "../../../ProductItem/ProductItem";
import {Link} from "react-router-dom";

const Read = () => {
    const [productList, setProductList] = useState(null)

    useEffect(() => {
        getAllProducts()
            .then(r => {
                console.log(r)
                setProductList(r.data)
            })
            .catch(e => console.log("Error: " + e))
    }, [])

    function handleRemove(id) {
        deleteById(id)
            .then(r => {
                console.log(r)
            })
            .catch(e => console.log("Error: " + e))
    }

    return (
        <div className="r1">
            <Link className="r1l" to="/add">
                <button className="r1bt"> ADD</button>
            </Link>
            <div className="r2">
                {productList != null ? (
                    productList.map(product => (
                        <div className="r3">
                            <ProductItem key={product.id} product={product}/>
                            <div className="r4">
                                <button onClick={() => handleRemove(product.id)}
                                        className="fa-sharp fa-solid fa-trash"></button>
                            </div>
                            <Link to={"/update/" + product.id} className="r4">
                                <button type="button" className="fa-solid fa-pen"></button>
                            </Link>
                        </div>
                    ))
                ) : ('no hay productos')}
            </div>
        </div>
    )
}

export default Read