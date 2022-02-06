import {
    ADD_PRODUCT, DELETE_TOTAL_PRODUCTS, REMOVE_PRODUCT
} from "../types";
import {refreshLocalStorage} from "../../config/refreshLocalStorage";

const cartReducer = (state,action) => {
    switch (action.type) {

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
            refreshLocalStorage(products1)

            return {
                ...state,
                carts: products1
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
            refreshLocalStorage(newProducts)
            return {
                ...state,
                carts: newProducts
            }
        default:
            return state;
    }
}

export default cartReducer;
