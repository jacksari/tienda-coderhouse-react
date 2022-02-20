import React, {useReducer} from 'react';
import {ADD_PRODUCT, CHECKOUT_SUCCESS, DELETE_TOTAL_PRODUCTS, INIT_CART, REMOVE_PRODUCT, RESET_CART} from "../types";
import cartReducer from "./cartReducer";
import cartContext from "./cartContext";

import {getFirestore} from "../../config/firebase";


const CartState = ({children}) => {

    // Definir state inicial
    const initialState = {
        carts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        cartCount: 0,
        totalPrice: 0,
        checkoutSuccess: false
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = (item, value) => {
        const product = {
            item,
            quantity: value
        }
        console.log(product)
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

    const createOrder = (order, carts) => {

        const db = getFirestore();
        const orders = db.collection('orders');
        orders.add(order).then(({id}) => {
            console.log('id de order', id)
            // Actualizar stock
            carts.forEach( async (product) => {
                await updateStock(product.item.id, product.item.stock - product.quantity)
            })
            resetCart();
            dispatch({
                type: CHECKOUT_SUCCESS,
                payload: true
            })
        }).catch(e => {
            console.log(e)
        })
    }

    const updateStock = async (idProduct, stockNew) => {
        const db = getFirestore();
        let docRef= db.collection('product').doc(idProduct);
        await docRef.update({
            stock: stockNew
        })
    }

    const resetCart = () => {
        dispatch({
            type: RESET_CART,
        })
    }

    const initCheckOut = () => {
        dispatch({
            type: CHECKOUT_SUCCESS,
            payload: false
        })
    }

    return (
        <cartContext.Provider
            value={{
                addItem,
                removeItem,
                clear,
                initCartCount,
                createOrder,
                updateStock,
                initCheckOut,
                carts: state.carts,
                cartCount: state.cartCount,
                totalPrice: state.totalPrice,
                checkoutSuccess: state.checkoutSuccess
            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export default CartState;
