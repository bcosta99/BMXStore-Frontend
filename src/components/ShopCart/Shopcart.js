import "./ShopcartStyles.css"
import React, {useEffect, useState} from 'react'
import {deleteItemSC, getShopCart} from "../../services/ShopCartService";
import ProductItem from "../ProductItem/ProductItem";

const Shopcart = () => {
    const [shopCart, setShopCart] = useState(null)

    useEffect(() => {
        getShopCart()
            .then(r => {
                console.log(r)
                setShopCart(r.data)
            })
            .catch(e => console.log(e))
    }, [])

    function handleRemove(id) {
        deleteItemSC(id)
            .then(r => {
                console.log(r)
            })
            .catch(e => console.log("Error: " + e))
    }

    return (
        <div className="sc1">
                {shopCart != null ? (
                    shopCart.cartItems.map(cartItem => (
                        <div className="sc2">
                                <ProductItem key={cartItem.id} product={cartItem.product}/>
                                <div> {cartItem.quantity}</div>
                            <div>
                                <button onClick={() => handleRemove(cartItem.id)} className="fa-sharp fa-solid fa-trash"></button>
                            </div>
                        </div>
                    ))
                ) : ('no hay productos')}
        </div>
    )
}

export default Shopcart