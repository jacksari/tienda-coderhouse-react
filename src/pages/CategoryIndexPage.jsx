import React from 'react';
import Layout from "../components/layout/Layout";
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";
import CategoryContainer from "../components/category/CategoryContainer";

function CategoryIndexPage(props) {

    return (
        <Layout>
            <TitlePage title="Página categorías"/>
            <Breadcrumb title="Categorías" page="/categorias"/>
            <CategoryContainer/>
        </Layout>
    );
}

export default CategoryIndexPage;
