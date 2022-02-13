import React, { useReducer } from 'react';
import {
    ADD_PRODUCT, DELETE_TOTAL_PRODUCTS, INIT_CART, REMOVE_PRODUCT
} from "../types";
import cartReducer from "./cartReducer";
import cartContext from "./cartContext";


const CartState = ({children}) => {

    // Definir state inicial
    const initialState = {
        carts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        cartCount: 0,
        totalPrice: 0
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = (item, value) => {
        const product = {
            item,
            quantity: value
        }
        dispatch({
            type: ADD_PRODUCT,
            payload: product
        })
    }

    const removeItem = (id) => {
        dispatch({
            type: REMOVE_PRODUCT,
            payload: id
        })
    }

    const clear = () => {
        dispatch({
            type: DELETE_TOTAL_PRODUCTS,
        })
    }

    const initCartCount = () => {

        let countCart = 0;
        let totalPrice = 0;
        state.carts.forEach(cart => {
            countCart = countCart + cart.quantity;
            totalPrice = totalPrice + cart.item.price * cart.quantity
        })
        dispatch({
            type: INIT_CART,
            payload: {
                countCart,
                totalPrice
            }
        })
    }

    return (
        <cartContext.Provider
            value={{
                addItem,
                removeItem,
                clear,
                initCartCount,
                carts: state.carts,
                cartCount: state.cartCount,
                totalPrice: state.totalPrice
            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export default CartState;
