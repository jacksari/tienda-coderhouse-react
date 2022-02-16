import React, {useContext, useEffect, useState} from 'react';
import Layout from "../components/layout/Layout";
import ProductDetails from "../components/item/ProductDetails";
import {useLocation} from "react-router-dom";
import BreadcrumbDetail from "../components/layout/BreadcrumbDetail";
import productContext from "../context/product/productContext";


function ProductIndexPage() {
    const router = useLocation();

    const { products, getProductById, productDetail } = useContext(productContext);

    useEffect(async () => {
        if (router.pathname.replace('/productos/', '')) {
            let slug = router.pathname.replace('/productos/', '');
            await getProductById(slug)
        }

    }, [products, router.pathname.replace('/productos/','')]);


    return (
        <Layout>
            {
                productDetail && <BreadcrumbDetail title="Productos" page="/productos" module={productDetail.title} moduleUrl={productDetail.slug}/>
            }
            {
                productDetail ? <ProductDetails course={productDetail}/> : <div>
                    <h2>Cargando producto...</h2>
                </div>
            }
        </Layout>
    );
}

export default ProductIndexPage;
