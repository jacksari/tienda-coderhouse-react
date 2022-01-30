import React from 'react';
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";
import Layout from "../components/layout/Layout";
import BreadcrumbDetail from "../components/layout/BreadcrumbDetail";
import FetchHooks from "../hooks/fetchHooks";
import {useLocation} from "react-router-dom";

function CategoryDetailsPage() {
    const router = useLocation();
    const { data, loading, error } = FetchHooks(`https://service.dened.org/api/categories/${router.pathname.replace('/categorias/','')}`);
    return (
        <Layout>
            <TitlePage title="Página categoría detalle"/>
            {
                data.category && <BreadcrumbDetail title="Categoría" page="/categorias" module={data.category.title} moduleUrl={data.category.title}/>
            }
            <div className="container">
                <h5>Agregar cursos filtrado por categoría</h5>
            </div>
        </Layout>
    );
}

export default CategoryDetailsPage;
