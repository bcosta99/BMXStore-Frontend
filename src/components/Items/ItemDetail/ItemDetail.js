import "./ItemDetailStyles.css"
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getProductByID} from "../../../services/ProductService";
import {addShopCart} from "../../../services/ShopCartService";

const ItemDetail = () => {
    const [counter, setCounter] = useState(0);
    const url = 'http://localhost:8080/cart/add';
    const [item, setItem] = useState(null)
    const params = useParams()
    const [data, setData] = useState({
        productId: "",
        quantity: "",
    });


    useEffect(() => {
        getProductByID(params.id, setItem)
            .then(r => {
                console.log(r)
                setItem(r.data)
            })
    }, [])

    const handleClick = async () => {
        setData({
            productId: item.id,
            quantity: counter
        })

        await addShopCart(data)
            .then(r => {
                console.log(r)
            })
    }

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        setCounter(count => count - 1);
    };

    return (
        <div className="id1">
            {item != null ? (
                <div>
                    <div className="idimg">
                    </div>
                    <div className="id2">
                        <h2 className="id21">{item.name}</h2>
                        <h2 className="id22">{item.description}</h2>
                        <h2 className="id23">Color: {item.color}</h2>
                        <h2 className="id24">Stock: {item.stock}</h2>

                        <div className="counter">
                            <h1> Cantidad </h1>
                            <div className="btn__container">
                                <button className="control__btn" onClick={increase}>+</button>
                                <span className="counter__output">{counter}</span>
                                <button className="control__btn" onClick={decrease}>-</button>
                            </div>
                        </div>

                        <button onClick={handleClick}> Add to Cart</button>
                    </div>
                </div>
            ) : ('no hay productos')}
        </div>
    )
}

export default ItemDetail