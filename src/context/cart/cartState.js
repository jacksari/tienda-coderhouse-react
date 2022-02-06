import React, { useReducer } from 'react';
import {
    ADD_PRODUCT, DELETE_TOTAL_PRODUCTS, REMOVE_PRODUCT
} from "../types";
import cartReducer from "./cartReducer";
import cartContext from "./cartContext";


const CartState = ({children}) => {

    // Definir state inicial
    const initialState = {
        carts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
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

    return (
        <cartContext.Provider
            value={{
                addItem,
                removeItem,
                clear,
                carts: state.carts,

            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export default CartState;
