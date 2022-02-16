import {
    GET_CATEGORIES, GET_PRODUCT_BY_SLUG, GET_PRODUCTS
} from "../types";

const productReducer = (state,action) => {
    switch (action.type) {

        case GET_PRODUCT_BY_SLUG:
            return {
                ...state,
                productDetail: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;
