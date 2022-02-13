import React, {useContext, useState, useEffect} from 'react';
import cartContext from "../../context/cart/cartContext";

function CartWidget() {
    const { cartCount, initCartCount, carts } = useContext(cartContext)
    useEffect(() => {
        if(carts.length > 0){
            initCartCount()
        }
    }, [carts.length]);


    return (
        <div className="d-flex align-items-center cart-container">
            <button className="btn btn-light mx-2">
                <i className="fas text-success fa-cart-plus fa-lg"/>
            </button>
            <p>{ cartCount }</p>
        </div>
    );
}

export default CartWidget;
