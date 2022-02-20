import React, { useReducer } from 'react';
import {
    GET_CATEGORIES, GET_PRODUCT_BY_SLUG, GET_PRODUCTS
} from "../types";
import productReducer from "./productReducer";
import productContext from "./productContext";
import {getFirestore} from "../../config/firebase";



const ProductState = ({children}) => {

    // Definir state inicial
    const initialState = {
        categories: [],
        products: [],
        productDetail: null
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(productReducer, initialState);

    const getCategories = async () => {
        try {
            const db = getFirestore();
            const itemsCollection = db.collection('category');
            itemsCollection.get().then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => doc.data());
                dispatch({
                    type: GET_CATEGORIES,
                    payload: data
                })
            }).catch((e) => {
                console.log(e)
            })

        } catch (e) {
            console.log(e)
        }
    }


    const getProducts = async () => {
        try {
            const db = getFirestore();
            const itemsCollection = db.collection('product');
            itemsCollection.get().then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id,
                    }
                });
                console.log(data)
                dispatch({
                    type: GET_PRODUCTS,
                    payload: data
                })
            }).catch((e) => {
                console.log(e)
            })

        } catch (e) {
            console.log(e)
        }
    }

    const getProductById = async (id) => {
        try {
            const db = getFirestore();
            const itemCollection = db.collection('product');
            const item = itemCollection.where('slug','==',id);
            item.get().then((querySnapshot) => {

                dispatch({
                    type: GET_PRODUCT_BY_SLUG,
                    payload: querySnapshot.docs.map(doc => doc.data())[0]
                })

            }).catch(e => {
                console.log(e)
            })

        } catch (e) {
            console.log(e)
        }
    }

    const getProductByCategory = async (category) => {
        try {
            const db = getFirestore();
            const itemCollection = db.collection('product');
            const item = itemCollection.where('category','==',parseInt(category));
            item.get().then((querySnapshot) => {

                dispatch({
                    type: GET_PRODUCTS,
                    payload: querySnapshot.docs.map(doc => doc.data())
                })

            }).catch(e => {
                console.log(e)
            })



        } catch (e) {
            console.log(e)
        }
    }



    return (
        <productContext.Provider
            value={{
                getCategories,
                getProducts,
                getProductById,
                getProductByCategory,
                categories: state.categories,
                products: state.products,
                productDetail: state.productDetail
            }}
        >
            {children}
        </productContext.Provider>
    )
}

export default ProductState;
