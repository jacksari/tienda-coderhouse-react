import React from 'react';
import Layout from "../components/layout/Layout";
import ProductDetails from "../components/item/ProductDetails";
import {useLocation} from "react-router-dom";
import FetchHooks from "../hooks/fetchHooks";
import BreadcrumbDetail from "../components/layout/BreadcrumbDetail";
import CategoryContainer from "../components/category/CategoryContainer";


function ProductIndexPage() {
    const router = useLocation();
    const { data, loading, error } = FetchHooks(`https://service.dened.org/api/courses/total/${router.pathname.replace('/productos/','')}`);

    return (
        <Layout>
            {
                data.course && <BreadcrumbDetail title="Productos" page="/productos" module={data.course.title} moduleUrl={data.course.slug}/>
            }
            {
                !loading ? <ProductDetails course={data.course}/> : <div>
                    <h2>Cargando producto...</h2>
                </div>
            }
        </Layout>
    );
}

export default ProductIndexPage;
