import {
    ADD_PRODUCT, DELETE_TOTAL_PRODUCTS, INIT_CART, REMOVE_PRODUCT
} from "../types";
import {refreshLocalStorage} from "../../config/refreshLocalStorage";

const cartReducer = (state,action) => {
    switch (action.type) {

        case INIT_CART:
            return {
                ...state,
                cartCount: action.payload.countCart,
                totalPrice: action.payload.totalPrice
            }
        case DELETE_TOTAL_PRODUCTS:
            // Función para eliminar el total de productos
            refreshLocalStorage([])
            return {
                ...state,
                carts: []
            }
        case REMOVE_PRODUCT:
            // Función para eliminar un producto por id
            const products1 = state.carts.filter(cart => cart.item.uid !== action.payload)
            let countCartRemove = 0;
            let totalPriceRemove = 0
            products1.forEach(cart => {
                countCartRemove = countCartRemove + cart.quantity;
                totalPriceRemove = totalPriceRemove + cart.item.price * cart.quantity
            })
            refreshLocalStorage(products1)

            return {
                ...state,
                carts: products1,
                cartCount: countCartRemove,
                totalPrice: totalPriceRemove
            }
        case ADD_PRODUCT:
            // Función para agregar producto y validar existencia
            let newProducts = []
            const pro = state.carts.find(cart => cart.item.uid === action.payload.item.uid)
            if(pro){
                newProducts = state.carts.map(cart => {
                    if(cart.item.uid === action.payload.item.uid){
                        console.log('existe')
                        return {
                            item: cart.item,
                            quantity: cart.quantity + action.payload.quantity
                        }
                    } else{
                        console.log('no existe')
                        return cart
                    }

                })
            }else {
                newProducts = [...state.carts, action.payload]
            }
            let countCart = 0;
            let totalPrice = 0;
            newProducts.forEach(cart => {
                countCart = countCart + cart.quantity;
                totalPrice = totalPrice + cart.item.price * cart.quantity
            })
            refreshLocalStorage(newProducts)
            return {
                ...state,
                carts: newProducts,
                cartCount: countCart,
                totalPrice
            }
        default:
            return state;
    }
}

export default cartReducer;
